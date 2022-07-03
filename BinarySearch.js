/** 
 * @Author      = Abdul Wahab Kazmi
 * @Email       = wahab.kazmi2000@gmail.com 
 * @Topic       = Binary Search
 * @Subject     = Algorithms
 * @BigO        = O(n3)
 * @Description = Binary Search is a searching algorithm same as linear
 *                but it takes a sorted array but in this example i am
 *                sorting it inside my function.
 **/


function binarySearch (array, target) {
  /* Sorting array by bubble sort algorithm */
  for (let i = 0; i < array.length; i++) {
    const primaryNumber = array[i]
    for (let j = 0; j < array.length; j++) {
      const secondaryNumber = array[j]
      if (primaryNumber < secondaryNumber) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  /* Searching */
  for (let t = 0; t < array.length; t++) {
    if (array[t] === target) {
      return t
    }
  }
  return -1
}

const array = [-5,2,-3,10,6]
const target = -5
console.log(binarySearch(array, target))