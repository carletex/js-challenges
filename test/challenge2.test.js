const  assert = require("chai").assert;
const { getTheObjectKeys } = require("../challenges/challenge2");

describe("Challenge2", function () {
  it("should return an empty array for and empty object", function () {
    const result = getTheObjectKeys({});
    assert.isArray(result);
    assert.isEmpty(result);
  });

  it("should return an array with the Object Keys", function () {
    const result = getTheObjectKeys({
      name: "Sanford",
      surname: "Stout",
      age: "32",
      country: "Canada"
    });

    assert.deepEqual(result, ["name", "surname", "age", "country"]);
  });
});
