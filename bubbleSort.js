/** 
 * @Author      = Abdul Wahab Kazmi
 * @Email       = wahab.kazmi2000@gmail.com 
 * @Topic       = Bubble Sort
 * @Subject     = Algorithms
 * @BigO        = O(n2)
 * @Description = Bubble sort is most ask interview question for sorting an array.It's slower than other sorting algorithms. I've used some extra 
                  variables just because to clear readablity. It takes a number and iterate through all the 
                  items in array and check if this is the biggest and takes it to the last as it's value via
                  swapping.
 **/

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let primaryNumber = array[i]
    for (let j = 0; j < array.length; j++) {
      let secondaryNumber = array[j]
      if (primaryNumber < secondaryNumber) {
        let savedSecondaryValue = array[j]
        array[j] = array[i]
        array[i] = savedSecondaryValue
      }
    }
  }
  return array
}
const array = [2, 5, -3, 0, 22]
console.log(bubbleSort(array))