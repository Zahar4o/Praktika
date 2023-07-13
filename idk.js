
function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = (radians * 180) / Math.PI;
  
    return degrees;
  }
  
  
  let input = ["1.57"]; 
  let result = radiansToDegrees(input);
  console.log(result.toFixed(2)); 