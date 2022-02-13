module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let closeBrackets = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (let j = 0; j < str.length; j++) {
    let currBracket = str[j];
    if (openBrackets.includes(currBracket)) {
      stack.push(currBracket);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if (closeBrackets[currBracket] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  
  return stack.length === 0;
};
