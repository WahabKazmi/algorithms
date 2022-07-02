/** 
 * @Author      = Abdul Wahab Kazmi
 * @Email       = wahab.kazmi2000@gmail.com 
 * @Topic       = Prime Number
 * @Subject     = Algorithms
 * @BigO        = O(1)
 * @Description = Prime number is the number which can't be sum of 
 *                2 same values. In this example I'm using remainder trick
 *                Remainder also gives the answer of prime values. It's super 
 *                fast as it's not using any loop inside.
 **/

function isPrime (number) {
  if (number % 2 !== 0) return true
  return false
}
console.log(isPrime(21))