import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";

const numplus = "0123456789.-０１２３４５６７８９．−";

class FloatValidator extends Validator {
  isValid(c) {
    if (c == "") {
      return false;
    }
    return numplus.indexOf(c) >= 0;
  }
  normalize(c) {
    if (c == "") {
      return "";
    }
    const n = numplus.indexOf(c);
    if (n < 0) {
      return "";
    }
    if (n >= numplus.length / 2) {
      return numplus[n - numplus.length / 2];
    }
    return c;
  }
}

export { FloatValidator };
