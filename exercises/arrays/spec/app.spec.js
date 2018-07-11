describe('problem 1', function () {
  it('will add a value to an array', function () {
    var arr = [];
    addToArrayOne(arr, 'blah');
    expect(arr).toEqual(['blah']);
  });
});

describe('problem 2', function () {
  it('will add a value to an array', function () {
    var arr2 = [];
    addWithoutPush(arr2, 'blah');
    expect(arr2).toEqual(['blah']);
  });
  it('does not use the Array.push() method', function () {
    var arr3 = new Array();
    spyOn(arr3, 'push').and.callThrough();
    addWithoutPush(arr3, 'blah');
    expect(arr3.push.calls.any()).toEqual(false);
  });
});

describe('problem 3', function () {
  it('will remove the first index from an array', function () {
    var arr = ['hello', 'world'];
    removeFirst(arr);
    expect(arr).toEqual(['world']);
  });
});

describe('problem 4', function () {
  it('will remove the last index from an array', function () {
    var arr = ['hello', 'world'];
    removeLast(arr);
    expect(arr).toEqual(['hello']);
  });
});

describe('problem 5', function () {
  it('will add a value to the beginning of an array', function () {
    var arr = ['world'];
    addToBeginning(arr, 'hello');
    expect(arr).toEqual(['hello', 'world']);
  });
});

describe('problem 6', function () {
  it('will switch the first and the last index of the array', function () {
    var arr = ['world', 'hello'];
    switchFirstAndLast(arr);
    expect(arr).toEqual(['hello', 'world']);
  });
});

describe('problem 7', function () {
  it('will reverse the array', function () {
    var arr = ['world', 'lovely', 'hello', 'oh'];
    flipIt(arr);
    expect(arr).toEqual(['oh', 'hello', 'lovely', 'world']);
  });
});

describe('problem 8', function () {
  it('will check if the string is a palindrome or not', function () {
    var str1 = 'hello';
    var flipped1 = palindromeChecker(str1);

    var str2 = 'mom';
    var flipped2 = palindromeChecker(str2);

    expect(flipped1).toEqual(false);
    expect(flipped2).toEqual(true);
  });
});
