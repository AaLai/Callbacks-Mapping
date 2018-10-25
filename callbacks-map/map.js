var words = ["ground", "control", "to", "major", "tom"];



//make the function
function map(array, callback) {
  if (array && callback)  {
    var emptyArray = [];
    array.forEach((element) => {
      emptyArray.push(callback(element));
    })
    console.log(emptyArray);
  } else {
    console.log("I need a valid input!")
  }
}
//make additional callback functions
//profit






map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

map()