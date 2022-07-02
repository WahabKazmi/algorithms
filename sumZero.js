/** 
 * @Author      = Abdul Wahab Kazmi
 * @Email       = wahab.kazmi2000@gmail.com 
 * @Topic       = Sum Zero
 * @Subject     = Algorithms
 * @BigO        = O(n2)
 * @Description = This algorithms find the 2 values which makes 0 after sum and return them.
                  I've used some extra variables just because to clear readablity.
 **/


function sumZero (array) {
  for (let i = 0; i < array.length; i++) {
    let primaryNumber = array[i]
    for (let j = 0; j < array.length; j++) {
      let secondaryNumber = array[j]
      if (primaryNumber + secondaryNumber === 0) {
        return [primaryNumber, secondaryNumber]
      }
    }
  }
}
const array = [2,-2,0,5,1,-9,-3]
console.log(sumZero(array))