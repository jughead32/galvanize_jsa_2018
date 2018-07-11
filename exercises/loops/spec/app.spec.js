describe('For loop tests', function () {
  describe('Problem 1', function () {
    it('should output an array of 1-10', function () {
      expect(problem1()).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
  });

  describe('Problem 2', function () {
    it('should output an array of 10-1', function () {
      expect(problem2()).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
  });

  describe('Problem 3', function () {
    it('should output an array of odd numbers from 1-10', function () {
      expect(problem3()).toEqual([1, 3, 5, 7, 9]);
    });
  });

  describe('Problem 4', function () {
    it('should output an array of even numbers from 1-10', function () {
      expect(problem4()).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('Problem 5', function () {
    it('should output an array of the muliples of 3 that are less than 10', function () {
      expect(problem5()).toEqual([3, 6, 9]);
    });
  });

  describe('Problem 6', function () {
    it("outputs an array of names starting with 'J'", function () {
      expect(problem6(['Amy', 'Jim', 'James', 'John', 'Sarah'])).toEqual(['Jim', 'James', 'John']);
    });
  });

  describe('Problem 7', function () {
    it('outputs the total of all numbers in the array added together', function () {
      expect(problem7([1, 2, 3, 4])).toEqual(10);
    });
  });

  describe('Problem 8', function () {
    it('outputs the alphabet from a to z in UPPERCASE', function () {
      expect(problem8()).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
    });
  });

  describe('Problem 9', function () {
    it('outputs the alphabet from z to a in UPPERCASE', function () {
      expect(problem9()).toEqual(['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']);
    });
  });

  describe('Problem 10', function () {
    it('returns a string containing all of the array elements joined with a space', function () {
      expect(problem10(['a', 'b', 'c', 'd'])).toEqual('a b c d');
    });
  });

  describe('Problem 11', function () {
    it('returns a string containing all of the array elements alternating uppercase and lowercase starting with the first element being uppercase', function () {
      expect(problem11(['a', 'p', 'p', 'l', 'e'])).toEqual('ApPlE');
    });
  });

  describe('Problem 12', function () {
    it('returns a string containing all of the array elements alternating uppercase and lowercase starting with the first element being uppercase', function () {
      expect(problem12(['a', 'p', 'p', 'l', 'e'])).toEqual('aPpLe');
    });
  });

  describe('Problem 13', function () {
    it('returns an array containing all of the first letters from the words in the string', function () {
      expect(problem13(['apple', 'orchards'])).toEqual(['a', 'o']);
    });
  });

  describe('Problem 14', function () {
    it('returns an array containing all of the last letters from the words in the string', function () {
      expect(problem14(['apple', 'orchards'])).toEqual(['e', 's']);
    });
  });

  describe('Problem 15', function () {
    it('returns index 1 to n multiplied by the number at index 0', function () {
      expect(problem15([2, 1, 2, 3])).toEqual([2, 2, 4, 6]);
    });
  });

  describe('Problem 16', function () {
    it('returns index 1 to n divided by the number at index 0', function () {
      expect(problem16([2, 2, 4, 6])).toEqual([2, 1, 2, 3]);
    });
  });

  describe('Problem 17', function () {
    it('returns an array with index 0 appended to all instances of that character', function () {
      expect(problem17(['a', 'apple', 'grape', 'peach', 'banana'])).toEqual(['a', 'aapple', 'graape', 'peaach', 'baanaanaa']);
    });
  });

  describe('Problem 18', function () {
    it('returns an array containing values based on the step of the for loop given in the parameters', function () {
      expect(problem18(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(problem18(1,10,3)).toEqual([1,4,7,10]);
      expect(problem18(2,7,2)).toEqual([2,4,6]);
    });
  });

});
