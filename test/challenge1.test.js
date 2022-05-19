const  assert = require("chai").assert;
const { average } = require("../challenges/challenge1");

describe("Challenge1", function () {
  it("should compute the average of a list of numbers", function () {
    const result = average();
    assert.equal(result, 17.75);
  });
});
