import { FloatValidator } from "./FloatValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputFloat extends InputWithValidator {
  constructor(opts) {
    super(new FloatValidator(), opts);
  }
}

customElements.define("input-float", InputFloat);

export { InputFloat };
