 
const contiguousSubArray = {

    findMax: function(_array){
      this.maxSum = 0;
      this.outputArray = [];
      for (let k = 0; k < _array.length; k++) {
      
        for (let i = k; i < _array.length; i++) {
          let sum = 0;
          let array = [];
      
          for (let j = k; j <= i; j++) {
            sum += _array[j];
            array.push(_array[j]);
          }
          if (sum > this.maxSum) {
            this.maxSum = sum;
            this.outputArray = array;
          }
        }
      }
  
    }
  };
  
  // Example 1 
  contiguousSubArray.findMax([1, 2, 3, 4, -10]);
  console.log(contiguousSubArray.outputArray ,   contiguousSubArray.maxSum); // 10
  
  
  // Example 2 
  contiguousSubArray.findMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]); 
  console.log(contiguousSubArray.outputArray, contiguousSubArray.maxSum);// 