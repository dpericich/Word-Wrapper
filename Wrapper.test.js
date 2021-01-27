const Wrapper = require("./Wrapper");

// Test block to check the input types of our Wrapper class's wrap function.
// If the input type is not correct, we should expect an error

describe("Both inputs for wrap method should be the correct type", () => {
  const wrapper = new Wrapper();
  test("the first argument to wrap should be a string", () => {
    expect(() => wrapper.wrap(7, expect.anything())).toThrow(
      "inputString must be a string"
    );
  });
  test("the second argument to wrap should be an integer", () => {
    expect(() =>
      wrapper
        .wrap("My next arg should be an integer, not a float", 1.1)
        .toThrow("maxColumnLength must be an integer")
    );
  });
  test("the second argument to wrap should be a number greater than 0", () => {
    expect(() =>
      wrapper
        .wrap("this value is too small", 0)
        .toThrow("maxColumnLength must be positive number")
    );
  });
});

// Test that the wrap method returns a string as its output

test("it returns a string", () => {
  const wrapper = new Wrapper();
  let inputs = [
    ["test case #1", 10],
    ["test case #2", 20],
    ["test case infinity", 1000],
  ];
  inputs.forEach((input) => {
    const result = wrapper.wrap(...input);
    expect(typeof result).toBe("string");
  });
});

// Check that inputs return expected outputs

describe("test inputs for specifics outputs", () => {
  test("test that the first test input works", () => {
    const wrapper = new Wrapper();
    const inputString =
      "Hello from Texas. Kick your boots off and enjoy a nice bowl of queso.";
    const maxColumnLength = 20;
    let result = wrapper.wrap(inputString, maxColumnLength);
    let expectedResponse =
      "Hello from Texas.\nKick your boots off\nand enjoy a nice\nbowl of queso.";
    expect(result).toBe(expectedResponse);
  });

  test("test that the second test input works", () => {
    const wrapper = new Wrapper();
    const inputString =
      "Here are some short words to test this algoritm for word wrap";
    const maxColumnLength = 12;
    let result = wrapper.wrap(inputString, maxColumnLength);
    let expectedResponse =
      "Here are\nsome short\nwords to\ntest this\nalgoritm for\nword wrap";
    expect(result).toBe(expectedResponse);
  });
});
