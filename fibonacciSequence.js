/** 
 * @Author      = Abdul Wahab Kazmi
 * @Email       = wahab.kazmi2000@gmail.com 
 * @Topic       = Fibonacci sequence
 * @Subject     = Algorithms
 * @BigO        = O(n)
 * @Description = Fibonacci number is the sum of it's previous 2 values.
 *                In this function, I take a number and start from 2 
 *                because 0 and 1 is the starter and i calculate the
 *                sum of previous 2 values of fib array and appending 
 *                to new index of fib array.
 **/

function fibonacci (number) {
  let fib = [0,1]
  for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}
console.log(fibonacci(5))