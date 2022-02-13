module.exports = function check(str, bracketsConfig) {
  let closeBracket = '';
  let openBracket = '';
  let res = 0;
  let isCorrect = true;
  for (let i = 0; i < bracketsConfig.length; i++) {
    closeBracket = bracketsConfig[i][0];
    openBracket = bracketsConfig[i][1];
    res = 0;
    for (let bracket in str) {
      
      if (bracket === openBracket) {
        res++;
      }
      else if (bracket === closeBracket) {
        res--;
      }
    }
    isCorrect = isCorrect & (res === 0)
  }
  return isCorrect;
}
