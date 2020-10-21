let BubbleSort = (arr) => {
  var len = arr.length;
  let sorted = Array()

  for (var i = 0; i < len; i++) {
    let count = 0
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        count++
      }
    }
    if (count === 0) {
      return sorted
    }
    let a = Array.from(arr);
    sorted.push(a)
  }

  return sorted;

}
export { BubbleSort }


function quick_Sorting(array) {
  if (array.length <= 1) {
    return array; // if there is only one element then return the same
  } else {
    var left = [];
    var right = [];
    var outputArray = [];
    var pivot = array.pop();
    var length = array.length;
    for (var i = 0; i < length; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return outputArray.concat(quick_Sorting(left), pivot, quick_Sorting(right));
  }
}


let selectionSort = (inpArray) => {
  for(let i=0; i<inpArray.length; i++){
    //For smallest number
    let min = i;
    for(let j=0; j<inpArray.length; j++){
      if(inpArray[j] < inpArray[min]){
        min = j;
      }
    }
    //sorting/swaping the elements in array
    if(min != i){
      let temp = inpArray[i];
      inpArray[i] = inpArray[min];
      inpArray[min] = temp;
    }
  }
  return inpArray;
}