var calculate = function (s) {
  const stack = [];
  let signValue = 1;
  let result = 0;
  let number = 0;

  const numbers = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
  const operations = new Set(['-', '+'])

  for (let i = 0; i < s.length; i++) {
      const char = s[i]
      if (numbers.has(char)) {
          number = number * 10 + parseInt(char);
      } else if (operations.has(char)) {
          result += number * signValue;
          signValue = char === '-' ? -1 : 1
          number = 0;
      } else if (char === '(') {
          stack.push(result, signValue);
          result = 0;
          signValue = 1
      } else if (char === ')') {
          result += number * signValue;
          result *= stack.pop();
          result += stack.pop();
          number = 0;
      }else {
          console.log('char: ', char)
      }
  }

  return result + number * signValue
};

