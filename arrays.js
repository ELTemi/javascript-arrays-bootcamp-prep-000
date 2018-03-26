var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(myArray, newElement) {
  return [newElement, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(myArray, newElement) {
  myArray.unshift(newElement)
  return myArray
}

function addElementToEndOfArray(myArray, newElement) {
  return [...myArray, newElement]
}

function destructivelyAddElementToEndOfArray(myArray, newElement) {
  myArray.push(newElement)
  return myArray
}

function accessElementInArray(myArray, newIndex) {
  console.log(myArray[newIndexindex])
}