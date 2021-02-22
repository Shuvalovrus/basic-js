const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  "use strict"

  if(Array.isArray(members) === false){
    return false
  } else if (members.length === 0){
    return "FAIL"
  }

  let result = [];
  let arr = members.filter(item => typeof item === "string").map(item => item.trim());

  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "string"){
    result.push(arr[i].charAt(0).toUpperCase());
    }
  }

  return result.sort().join('');

 };