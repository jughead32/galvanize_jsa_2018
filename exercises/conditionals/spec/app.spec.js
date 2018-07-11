describe("higherNumber", function () {
  it("should return the higher of two numbers", function () {
    expect(higherNumber(2,4)).toEqual(4);
  });
});

describe("inRelationToThree", function () {
  it("should return 'greater than zero and less than or equal to three' if the argument is greater than 0 and less than or equal to 3", function () {
    expect(inRelationToThree(1)).toEqual("greater than zero and less than or equal to three");
  });
  it("should say 'greater than three' if the argument is greater than 3", function () {
    expect(inRelationToThree(5)).toEqual("greater than three");
  });
  it("should say 'less than zero' if the argument is less than 0", function () {
    expect(inRelationToThree(-4)).toEqual("is less than zero");
  });
});

describe("fizzBuzz", function () {
  it("should show the number if not a multiple of 3 or 5", function () {
    expect(fizzBuzz()).toContain(2);
  });
  it("should show 'FizzBuzz' if number is a multiple of 3 and 5", function () {
    expect(fizzBuzz()[14]).toContain("FizzBuzz");
  });
  it("should show 'Fizz' if number is a multiple of only 3", function () {
    expect(fizzBuzz()[2]).toContain("Fizz");
  });
  it("should show 'Buzz' if number is a multiple of only 5", function () {
    expect(fizzBuzz()[4]).toContain("Buzz");
  });
});

describe('sleepings', function () {
  it('should be able to return a the correct value based on the number of hours slept', function () {
    expect(sleepings(4)).toEqual('Not Enough');
    expect(sleepings(9)).toEqual('Enough');
  });
});
