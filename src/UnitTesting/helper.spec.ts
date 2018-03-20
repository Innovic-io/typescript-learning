import * as assert from "assert";
import { countOccuranceOfCarachterInString, checkIfWordIsPalindrom, checkIfNumberIsPerfect } from './helper';

assert.equal(countOccuranceOfCarachterInString('a', 'ivana'), 2);
assert.equal(countOccuranceOfCarachterInString('a', 'vladimir'), 1);
assert.equal(countOccuranceOfCarachterInString('a', 'belo'), 0);

assert.equal(checkIfWordIsPalindrom('ivana'), false);
assert.equal(checkIfWordIsPalindrom('ana'), true);
assert.equal(checkIfWordIsPalindrom('anavolimilovana'), true);

assert.equal(checkIfNumberIsPerfect(6), true);
assert.equal(checkIfNumberIsPerfect(9), false);
assert.equal(checkIfNumberIsPerfect(496), true);
