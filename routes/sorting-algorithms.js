let BubbleSort = (arr) => {
    var len = arr.length;
    let sorted = Array()
    
    for (var i = 0; i < len ; i++) {
    let count = 0
      for(var j = 0 ; j < len - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
        count++
      }
     }
     if(count === 0){
         return sorted
     }
     let a = Array.from(arr);
     sorted.push(a)
    }
    
    return sorted;
    
}
export {BubbleSort}