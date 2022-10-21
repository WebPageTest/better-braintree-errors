# Better Braintree Errors

Braintree is likely to give you back an error that doesn't help the customer very much, but never fear! We've grabbed the table from [Webforce](https://webforcehq.zendesk.com/hc/en-us/articles/4404571172372-Braintree-Decline-Codes) and made it so that if you feed it a Braintree error, we show you the implications of said error.

## How to Use

```js
import BraintreeErrorParser from "better-braintree-errors";

const error = "Process Declined: Approved (1000)";

const braintreeError = BraintreeErrorParser.parse(error);

console.log(braintreeError.code); // => "1000"
console.log(braintreeError.text); // => "Approved"
console.log(braintreeError.implication); // => "The customer's card is a valid card and accepted by credit card networks, but the bank is likely rejecting the CVV or the postal code provided"
```

## API

### BraintreeErrorParser

`parse(error: string)` -> `BraintreeError`

Parse takes an error in the form of a string, formatted the way Braintree sends the error to you and returns a `BraintreeError` object

### BraintreeError

`constructor({code: string, text: string, implication: string}) -> `BraintreeError`

#### Properties

- `code: string` -> the error code
- `text: string` -> The official title of the error
- `implication: string` -> A deeper explanation of what the error might mean
