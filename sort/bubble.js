function bubbleSort(arr) {
    var length = arr.length;
  
    for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  
  var numbers = [5, 3, 8, 4, 2];
  console.log("Original array: " + numbers);
  var sortedNumbers = bubbleSort(numbers);
  console.log("Sorted array: " + sortedNumbers);
  