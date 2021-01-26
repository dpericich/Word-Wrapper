const Wrapper = require("./Wrapper");

// Test block to check the input types of our Wrapper class's wrap function.
// If the input type is not correct, we should expect an error

describe("Both inputs for wrap should be the correct type", () => {
  const wrapper = new Wrapper();
  test("the first argument to wrap should be a string", () => {
    expect(() => wrapper.wrap(7, expect.anything())).toThrow(
      "inputString must be a string"
    );
  });
  test("the second argument to wrap should be a number", () => {
    expect(() =>
      wrapper
        .wrap("a nice sentence", "an unexpected sentence")
        .toThrow("maxColumnLength must be a number")
    );
  });
});

// Check that inputs return expected outputs
