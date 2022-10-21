import BraintreeErrorParser from "../build/index.js";
import { test } from "tap";

test("this thing does anything", (t) => {
  t.equal(
    BraintreeErrorParser.parse("Processor Declined: Approved (1000)").code,
    "1000"
  );
  t.end();
});
