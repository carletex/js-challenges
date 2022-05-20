const  assert = require("chai").assert;
const { exitWhenFinished } = require("../challenges/challenge3");

describe("Challenge3", function () {
  it("should wait until the function ends and changes the value", async function () {
    const result = await exitWhenFinished();
    assert.equal(result, 10);
  });
});
