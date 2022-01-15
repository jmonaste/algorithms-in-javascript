export default class Printer {
  /**
   * Constructor.
   * @param {function(a: *, b: *)} [printerFunction] - It may be custom printer function that may 
   * printer custom objects.
   */
  constructor(printerFunction) {
    this.printer = printerFunction || Printer.defaultprinterFunction;
  }

  /**
   * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultprinterFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Prints an array
   * @param {*} array
   * @param {*} mode
   * @return {boolean}
   */
  arrayPrinter(array, mode) {
    if (mode === 0){
      this.arrayLinearPrinter(array);
    }

    if(mode === 1){
      this.arrayColumnPrinter(array);
    }

  }

  /**
   * Prints an array in linear mode
   * @param {*} array
   */
   arrayLinearPrinter(array) {
    array.forEach(function(entry) {
      console.log(entry);
    });
  }

  /**
   * Prints an array in column mode
   * @param {*} array
   * @return {boolean}
   */
   arrayColumnPrinter(array) {
    return this.printer(a, b) === 0;
  }



  /**
   * Checks if variable "a" is less than "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThan(a, b) {
    return this.printer(a, b) < 0;
  }

  /**
   * Checks if variable "a" is greater than "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.printer(a, b) > 0;
  }

  /**
   * Checks if variable "a" is less than or equal to "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Checks if variable "a" is greater than or equal to "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * Reverses the comparison order.
   */
  reverse() {
    const printerOriginal = this.printer;
    this.printer = (a, b) => printerOriginal(b, a);
  }
}
