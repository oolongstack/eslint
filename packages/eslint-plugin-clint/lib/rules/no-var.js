/**
 * @fileoverview 文件不允许var
 * @author cwater
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "文件不允许var",
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      unexpetced: '不能使用{{type}}定义变量'
    }
  },
  // https://cn.eslint.org/docs/developer-guide/working-with-rules
  create(context) {
    const { report, getSourceCode } = context;
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    const sourceCode = getSourceCode()
    return {
      // visitor functions for different types of nodes
      VariableDeclaration(node){
        if(node.kind === 'var') {
          report({
            node,
            data: {
              type: 'var'
            },
            messageId: 'unexpetced',
            fix(fixer){
              const varToken = sourceCode.getFirstToken(node,{ filter: t => t.value === 'var' })
              return fixer.replaceText(varToken, 'let')
            }
          })
        }
      }
    };
  },
};
