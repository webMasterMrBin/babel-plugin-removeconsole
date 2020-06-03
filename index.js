import babel from '@babel/core'
// const parser = require('@babel/parser')
// const generate = require('@babel/generator')
// const traverse = require('@babel/traverse')

const code = `const a = 1; console.log('slb')`

// traverse.default(ast, {
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
      ExpressionStatement(path) {
        const { node } = path
        const callee = node.expression?.callee
        if (callee?.object?.name === 'console' && callee?.property?.name === 'log') {
          path.remove()
        }
      }
    }
  }
}

export default plugin
