import BraintreeError from "./lib/BraintreeError";
import data from "./data/errors";

class BraintreeErrorParser {
  static parse(errorText: string) {
    const regExp = /\(([^)]+)\)/;
    const errorCode = regExp.exec(errorText);
    if (errorCode && errorCode.length && errorCode[1] && data[errorCode[1]]) {
      return new BraintreeError({
        code: errorCode[1],
        text: data[errorCode[1]].text,
        implication: data[errorCode[1]].implications,
      });
    } else {
      return new BraintreeError({
        code: "default",
        text: data["default"].text,
        implication: data["default"].implications,
      });
    }
  }
}

export default BraintreeErrorParser;
