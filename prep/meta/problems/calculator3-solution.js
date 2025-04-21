/**
 * https://leetcode.com/problems/basic-calculator-iii/
 */
var calculate = function(s, i=0) {
  let num = 0;
  let result = 0;
  let previous = 0;
  let sign = "+";
  for(; i<s.length; i++) {
      const char = s[i];
      if(!isNaN(char)) {
          num = num*10+parseInt(char);
      }
      if(isNaN(char) || i===s.length-1) {
          if(char === "(") {
              ({i, num} = calculate(s, i+1));
          }
          if(sign === "+") {
              result += previous;
              previous = num;
          } else if(sign === "-") {
              result += previous;
              previous = -num;
          } else if(sign === "*") {
              previous *= num;
          } else if(sign === "/") {
              previous = Math.trunc(previous/num);
          }
          if(char === ")") {
              return {i, num: result+previous};
          }
          num = 0;
          sign = char;
      }
  }
  return result+previous;
};