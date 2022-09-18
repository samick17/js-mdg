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

class Calculator {

  /*
   * @category: function
   * @name: add
   * @description: The add function
   * @param: {Number} arg1 - The first argument to add
   * @param: {Number} arg2 - The second argument to add
   * @returns: {Number} - result
   * @example: asdfg
     cosnt calc = new Calculator();
     calc.add(1, 2);
  */
  add(arg1, arg2) {
    return arg1 + arg2;
  }

  /*
   * @category: function
   * @name: minus
   * @description: The minus function
   * @param: {Number} arg1 - The first argument to minus
   * @param: {Number} arg2 - The second argument to minus
   * @returns: {Number} - result
   * @example: asdfg
     cosnt calc = new Calculator();
     calc.minus(1, 2);
  */
  minus(arg1, arg2) {
    return arg1 - arg2;
  }

}

jsMDG.genDoc(path.resolve(__dirname, 'index.js'), path.resolve(__dirname, 'index.md'));
