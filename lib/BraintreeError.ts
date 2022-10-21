export default class BraintreeError {
  code: string;
  text: string;
  implication: string;

  constructor(options: { code: string; text: string; implication: string }) {
    this.code = options.code;
    this.text = options.text;
    this.implication = options.implication;
  }
}
