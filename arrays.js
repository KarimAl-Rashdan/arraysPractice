var friends = ["Sage", "Drew", "Pax", "Haku", "Searsh"]
var ages = [24, 32, 19, 22, 2]
var enrolledTuring = [true, false, true, true, false]
/* The code below will remove the last element of the array */
friends.pop()
console.log(friends)
/* The code below will return a new array with the elements that start at index position 1 and up to but not including index position 4 */
console.log(ages.slice(1,4))

/* The code below will remove the first array element */
enrolledTuring.shift()
console.log(enrolledTuring)
