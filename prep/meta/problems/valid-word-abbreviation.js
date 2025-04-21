/**
https://leetcode.com/problems/valid-word-abbreviation/
Only issue here is that there are a lot of edge cases
 */
var validWordAbbreviation = function(word, abbr) {
  let wordP = 0;
  let abbrP = 0;
  let sum = 0;

  while (wordP < word.length || abbrP < abbr.length) {
    if (!isNaN(abbr[abbrP])) {
      if (abbr[abbrP] === '0' && !sum) {
        return false;
      }
      sum = sum * 10 + parseInt(abbr[abbrP++])
      continue;
    }

    if (sum) {
      if (sum + wordP > word.length) {
        return false;
      }
      wordP += sum;
      sum = 0;
    }

    if (word[wordP] === abbr[abbrP]) {
      wordP++;
      abbrP++;
    } else {
      return false;
    }


  }

  return !sum;
};