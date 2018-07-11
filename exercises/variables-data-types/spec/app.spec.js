describe("willReturnAString", function () {
  it("will return a value of type 'string'", function () {
    expect(typeof willReturnAString()).toBe('string');
  });
});

describe("willReturnABoolean", function () {
  it("will return a value of type 'boolean'", function () {
    expect(typeof willReturnABoolean()).toBe('boolean');
  });
});

describe("willReturnANumber", function () {
  it("will return a value of type 'number'", function () {
    expect(typeof willReturnANumber()).toBe('number');
  });
});
