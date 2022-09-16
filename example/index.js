const path = require('path');
const jsMDG = require('../index.js');

/* 
 * @category: static function
 * @name: foo
 * @description: The add function
 * @param: {string} arg1 - The first argument to add
 * @param: {string} arg2 - The second argument to add
 * @returns: {} - 
 * @example: asdfg
   foo(5);
   bar(2);
   x + 1;
*/
function add(arg1, arg2) {
    return arg1 + arg2;
}

jsMDG.genDoc(path.resolve(__dirname, 'index.js'), path.resolve(__dirname, 'index.md'));
