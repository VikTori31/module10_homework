for (let i = 0; i < arr.length - 1; i++) {
   if (arr[i] !== arr[i + 1]) {
       result = false 
       break
   }
}
console.log(result)