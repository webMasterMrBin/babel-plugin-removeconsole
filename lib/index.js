"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = _interopRequireDefault(require("@babel/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const parser = require('@babel/parser')
// const generate = require('@babel/generator')
// const traverse = require('@babel/traverse')
var code = "const a = 1; console.log('slb')"; // traverse.default(ast, {
//   // enter(path) {
//   //   console.log('node', path.node)
//   // }
// 
//   ExpressionStatement(path) {
//     const { node } = path
//     const callee = node.expression?.callee
//     if (callee?.object?.name === 'console' && callee?.property?.name === 'log') {
//       path.remove()
//     }
//   }
// })
// 
// console.log('ast', ast)
// 
// const output = generate.default(ast, {}, code)
// 
// console.log('output', output, code)
// babel.transform(code, {
//   plugins: [
//     function(types) {
//       return {
//         visitor: {
//           ExpressionStatement(path) {
//             const { node } = path
//             const callee = node.expression?.callee
//             if (callee?.object?.name === 'console' && callee?.property?.name === 'log') {
//               path.remove()
//             }
//           }
//         }
//       }
//     }
//   ]
// }, (err, result) => {
//   console.log('result', result)
// })

function plugin(types) {
  return {
    visitor: {
      ExpressionStatement: function ExpressionStatement(path) {
        var _node$expression, _callee$object, _callee$property;

        var node = path.node;
        var callee = (_node$expression = node.expression) === null || _node$expression === void 0 ? void 0 : _node$expression.callee;

        if ((callee === null || callee === void 0 ? void 0 : (_callee$object = callee.object) === null || _callee$object === void 0 ? void 0 : _callee$object.name) === 'console' && (callee === null || callee === void 0 ? void 0 : (_callee$property = callee.property) === null || _callee$property === void 0 ? void 0 : _callee$property.name) === 'log') {
          path.remove();
        }
      }
    }
  };
}

var _default = plugin;
exports["default"] = _default;
