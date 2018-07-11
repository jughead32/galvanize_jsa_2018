describe("addFive", function () {
  it("will return the sum of the argument passed in plus 5", function () {
    expect(addFive(4)).toBe(9);
  });
});
describe("addAnArray", function () {
  it("takes two arrays as parameters that will add one array to another", function () {
    expect(addAnArray([1, 2], [3, 4])).toContain(1);
    expect(addAnArray([1, 2], [3, 4])).toContain(2);
    expect(addAnArray([1, 2], [3, 4])).toContain(3);
    expect(addAnArray([1, 2], [3, 4])).toContain(4);
  });
});
describe("addOne", function () {
  it("increments the value every index in the array by one", function () {
    expect(addOne([1, 2, 3])).toContain(2);
    expect(addOne([1, 2, 3])).toContain(3);
    expect(addOne([1, 2, 3])).toContain(4);
  });
});
describe("evensAndOdds", function () {
  it("will return an array with an array of evens and an array of odds, respectively", function () {
    expect(evensAndOdds([1,2,3,4]).length).toBe(2);
    expect(evensAndOdds([1,2,3,4])[0][0]).toBe(2);
    expect(evensAndOdds([1,2,3,4])[0][1]).toBe(4);
    expect(evensAndOdds([1,2,3,4])[1][0]).toBe(1);
    expect(evensAndOdds([1,2,3,4])[1][1]).toBe(3);
  });
});
describe("addAPerson", function () {
  describe("takes two parameters and adds a person object to an array of people", function () {

    var people = [{
      name: 'dave',
      age: 44
    }];
    addAPerson(people, "james", 22);

    it("contains a name as a string and a number as an age", function () {
      console.log(people);
      expect(typeof people[1].name).toBe('string');
      expect(typeof people[1].age).toBe('number');
    });

    it("contains the name and the age that were given", function () {
      expect(people[1].name).toBe('james');
      expect(people[1].age).toBe(22);
    });
  });
});
