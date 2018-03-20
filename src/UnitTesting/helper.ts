/**
 * Count how many times one character appear in string.
 *
 * @param character
 * @param string
 * @returns {number}
 */
export function countOccuranceOfCarachterInString(character, string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }

  // return string.split('').filter((char) => char === character).length;
  return count;
}

/**
 * Check if desired word is Palindrom
 *
 * @param palindrom
 * @returns {number}
 */
export function checkIfWordIsPalindrom(palindrom) {

  let i = 0, j = palindrom.length - 1, checkEqual = 0;
  const middle: number = (Math.round(palindrom.length / 2)) - 1;

  while ((i < middle && j > middle) && (palindrom[i++] === palindrom[j--])) {
    checkEqual++;
  }

  // return palindrom === palindrom.split('').reverse().join('');
  return checkEqual === middle;
}

/**
 * Check if desired number is perfect
 *
 * @param number
 * @returns {number}
 */
export function checkIfNumberIsPerfect(number) {

  const divisors: number[] = [];
  let i = 1;
  while (i < number) {
    if (number % i === 0) {
      divisors.push(i);
    }
    i++;
  }

  const sum = divisors.reduce((previousValue, currentValue) => previousValue += currentValue, 0);
  return sum === number;
}
