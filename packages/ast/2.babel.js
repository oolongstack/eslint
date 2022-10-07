const babel = require("@babel/core");
const types = require("@babel/types");

// const arrowFunctions = require("babel-plugin-transform-es2015-arrow-functions");

const transformFunction = {
  visitor: {
    ArrowFunctionExpression(path) {
      const { node } = path;
      // console.log(node);
      node.type = "FunctionExpression";
      hoistFunctionEnv(path); // 解决箭头函数的this问题
      let body = node.body; // 拿到 a+b

      // 判断和生成
      if (!types.isBlockStatement(body)) {
        node.body = types.blockStatement([types.returnStatement(body)]);
      }
    },
  },
};
function hoistFunctionEnv(path) {
  const thisEnv = path.findParent(
    (parent) =>
      (parent.isFunction() && parent.isArrowFunctionExpression()) ||
      parent.isProgram()
  );

  const bindingThis = "_this";

  const thisPaths = getThisPath(path);

  thisPaths.forEach((path) => {
    path.replaceWith(types.identifier(bindingThis));
  });

  thisEnv.scope.push({
    id: types.identifier(bindingThis),
    init: types.thisExpression(),
  });
}
function getThisPath(path) {
  const arr = [];
  path.traverse({
    ThisExpression(path) {
      arr.push(path);
    },
  });
  return arr;
}
const code = `const sum = (a,b) => console.log(this)`;

const r = babel.transform(code, {
  plugins: [transformFunction],
});
console.log(r.code);
