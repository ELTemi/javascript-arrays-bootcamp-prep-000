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
  return(myArray[newIndex])
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(myArray) {
  myArray.slice(1)
  return myArray
}
