/** 
 * @Author      = Abdul Wahab Kazmi
 * @Email       = wahab.kazmi2000@gmail.com 
 * @Topic       = Factorial
 * @Subject     = Algorithms
 * @BigO        = O(n)
 * @Description = Factorial is the function to find factorial number of
 *                given integer. I'm just multiplying values while 
 *                iterating. Don't start loop from zero it will return 
 *                0 and don't start 1 because it's a useless iteration in
 *                our loop.
 **/


function factorial (number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = i * result
  }
  return result
}
console.log(factorial(5))