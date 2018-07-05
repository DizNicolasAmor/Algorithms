const findTwoNumbers = (arr, sum) => {
  let numbers = [];
  const len = arr.length;

  for(let i = 0; i < len - 1; i++) {
    for(let j = i+1; j < len; j++) {
      if( arr[i] + arr[j] === sum) {
        numbers[0] = arr[i];
        numbers[1] = arr[j];
        j = len;
        i = len;
      }
    }
  }

  return numbers;
};

// console.log(findTwoNumbers([1, 2, 3, 4, 5, 6], 7));

