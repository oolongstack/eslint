const esprima = require("esprima");
const estraverse = require("estraverse");
const escodegen = require("escodegen");

let code = `function a(id){}`;

const ast = esprima.parseScript(code);

// console.dir(ast);
// console.dir(ast.body);
// console.dir(ast.body[0].params);
// console.log("---------------");
estraverse.traverse(ast, {
  enter(node) {
    console.log("enter: " + node.type);
    if (node.type === "FunctionDeclaration") node.id.name = "ast";
  },
  leave(node) {
    console.log("leave: " + node.type);
  },
});

const genCode = escodegen.generate(ast);
console.log(genCode);
