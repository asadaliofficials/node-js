// Single Export in module 
// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// module.exports = { add, sub };


// Multiple Export in module

exports.add = function(a,b){
  return a + b
}
exports.sub = function(a,b){
  return a - b
}