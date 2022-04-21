//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr){
    return arr.filter(num => num > -1).reduce((a, b) => a + b, 0)
  }
  
  //other method:
  // const positiveSum = arr => arr.filter(num => num > 0).reduce((a, b) => a + b, 0)

  //function positiveSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) sum += arr[i]
//     }
//     return sum
// }