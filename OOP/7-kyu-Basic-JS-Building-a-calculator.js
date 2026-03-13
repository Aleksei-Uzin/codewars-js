/**
 * Basic JS - Building a calculator
 * https://www.codewars.com/kata/529f2d1c403a58f660000656/train/javascript
 *
 */

class Calculator {
  static add(a, b) {
    return a + b
  }

  static subtract(a, b) {
    return a - b
  }

  static multiply(a, b) {
    return a * b
  }

  static divide(a, b) {
    return !!b && a / b
  }
}
