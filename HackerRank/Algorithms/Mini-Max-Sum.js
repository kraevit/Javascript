function miniMaxSum(arr) {

    if ( arr.length < 6 ) {

      arr.sort(); // sort the array
  
      let copy1 = [...arr];
      let copy2 = [...arr];
    
      copy1.shift(); // remove lowest value from copy1
      copy2.pop(); // remove largest value from copy2
    
      let maxValue = copy1.reduce((prev, curr) => prev + curr); // calculate max value
      let minValue = copy2.reduce((prev, curr) => prev + curr); // calculate min value
    
      console.log(minValue, maxValue);

    } else {  
      console.log("Maximum 5 numbers allowed!");
    }
}

miniMaxSum([1,2,3,4,5]);