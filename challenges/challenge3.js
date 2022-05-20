// --- No need to change this
let testValue = 0;
const addToValue = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      testValue += 5;
      resolve();
    }, 1);
  })
}
const doubleValue = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      testValue *= 2;
      resolve();
    }, 1);
  })
}
// --------------------------

/**
 * Challenge 3.
 *
 * Make sure the right value gets returned
 * (we don't want to exit the function too early)
 *
 * Explore the difference between .then() and await/async patters.
 */
const exitWhenFinished = () => {
  console.log("Running and waiting until the function is completed");

  // Is this how we want to call this functions?
  addToValue();
  doubleValue();

  return testValue;
}

module.exports = {
  exitWhenFinished,
}
