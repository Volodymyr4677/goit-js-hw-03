function makeArray(firstArray, secondArray, maxLength) {
  const combinedArray = firstArray.concat(secondArray); 
  if (combinedArray.length > maxLength) {  
    return combinedArray.slice(0, maxLength);
  } 
  return combinedArray;
}






console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston",
