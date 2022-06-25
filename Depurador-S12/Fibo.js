function fibonacci(nums) {
  
    let fib = [0, 1];
    let data = [1];
    
    for(let i = 2; i <= nums; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
      data.push(fib[i]);
    }
    
    return data;
  }

console.log(fibonacci(10))