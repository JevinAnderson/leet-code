
/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
function getSecondsRequired(N, F, P) {
  // Write your code here
  /* we want to squeeze them together as much as possible start with closest to the shore. once we have them all squeezed together, we can probably do math to figure out the number of final hops by well it doesn't matter actually, even if the frogs are hopping over all other frogs, the line only goes up once */
  const positions = [...P]
  positions.sort((a, b) => a - b)

  /**

  Actually this whole thing is probably math. frog has to jump all the gaps until they get to closest frog. then they're moving as a group to next gap, 1 at a time. if they can jump the whole group, it's probably just like

  6 lillies 3 frogs

  three gaps + 1

  total - number of gaps, + frogs - 1

  [1, 0] 4 - 1 - 0

  [0, 1, 0, 1, 1] (6 - 1) - 3 - (2 - 1) = -1 + 3 = 2
  [1, 0, 0, 0, 0, 1, 0, 1] 9 - 3 - 0 = total 3 frogs,
  [1, 0, 0, 0, 0, 1, 0, 1] (9 - 1) - 0 = 8
  [0, 0, 0, 0, 0, 1, 0, 1] (9 - 1) - 2 - (6 - 1) = 1 + 2
  n - 1 = total
  total - frogs = gaps
  clear all the gaps
  add all the frogs
  - starting gappppp


  number of gaps, plus the number of frogs,

  total gaps is (n - 1) - F - (positions[0] - 1) + frogs - 1

  [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0] = 5 + 7 = 11
  7 [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
  */



  const gaps = (N - 1) - F - (positions[0] - 1);


  return gaps + F;


  /*
  damned if I wasn't close lol, ordering what are you going to do
  */

  // return F + (N - F - 1) - (positions[0] - 1)

  // I had it :) Sorting error. This feedback loop sucks :)
}
