var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
  var array1 = [element, ...array];
  return array1;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}