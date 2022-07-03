/** 
 * @Author      = Abdul Wahab Kazmi
 * @Email       = wahab.kazmi2000@gmail.com 
 * @Topic       = Linear Search
 * @Subject     = Algorithms
 * @BigO        = O(n2)
 * @Description = Linear Search is a basic search algorithm which returns
 *                found element's index else it returns -1
 **/


function linearSearch (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }
  return -1
}

const array = [1,8,5,3,4,0,6]
const target = 1
console.log(linearSearch(array, target))
