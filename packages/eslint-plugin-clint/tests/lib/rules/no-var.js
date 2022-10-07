/**
 * @fileoverview 文件不允许var
 * @author cwater
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-var"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-var", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "let a = 1",
    },
  ],

  invalid: [
    {
      code: "var a = 1",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
