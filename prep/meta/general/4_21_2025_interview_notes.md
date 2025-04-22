# 4/21

## Questions to ask engineers
1. Do you like your job
2. What's the worst part of your job
3. What is your work schedule
4. What is your on call schedule
5. What is the most exciting thing you think meta is working on generally
6. What laptop do you use, how often is it replaced
7.


## Questions for managers
1. How stable is your team, do people come and go often
2. How long have you been in your role
3. What do you think makes the most successful engineers on your team


## Heera

1. OnCall rotations -


# Round 1 - Fight

Rough -> Julia worked on the monetization team -> Likes her job, isn't worried about her equipment -> Palindrome by removing one character and sliding window median -> solved both naively then optimized

# Round 2 - Begin - shadow behavioral

John -> infra team -> job stability -> yeah -> scuba, data diving exploration tool

# Round 3 - Doom -

Terry -> Software engineer for reality labs ->

data model, api, system components,

health and assisted tech space -> blind assistance glasses ->
-> moving quickly for a whale

Round 4 - More Doom ->

Xinyue -> shinyu -> 2018 -> ar/vr developer experience -> ai org
in 2020 ->


Work remotely -> facebook air research -> fundamental air research -

Given a binary tree check if each node is the average of all its descendants (direct and indirect children).

    2
   / \
  2   2
 /   / \
2   1   3


Node.left
node.right
node.value

/*
Some recursion, we're going to deep first, to get to the leaf nodes

from there, we're going to return the count of the children, and the sum of all of the nodes check the current value against the average of these
well'll continue to return the count and sum of the children nodes

*/

```JavaScript

function isAverageTree(input) {
  function traverse(node) {

    // count of children and sum of their values, [count, sum]
    if(!node) {
      return [0, 0]
    }

    const left = traverse(node.left)
    const right = traverse(node.right);

    let count = 0;
    let sum = 0;
    if(left[0]) {
      count += left[0];
      sum += left[1]
    }
    if(right[0]){
      count += right[0]
      sum += right[1]
    }

    if(count) {
      const average = sum / count;
      if(node.val !== average){
        throw new Error('bad')
      }
    }

    return [count + 1, sum + node.val]
  }

  try{
    traverse(input)
  }catch{
    return false;
  }

  return true;
}

Given two (singly) linked lists, where each node is a string, return True if the combined nodes in both lists represent the same word, or False otherwise.
Example:Input (List A) = "he" -> "ll" -> "o"
Input (List B) = "hel" -> "l" -> "o"

Output = True, as both lists represent the word "hello"

// iterate through the strings and concatenate the strings


function sameWord(list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let char1index = 0;
  let char2index = 0;

  while(l1 && l2) {
    if(char1Index >= l1.value.length) {
      char1Index = 0;
      l1 = l1.next;
    }
    if(char2Index >= l2.value.length) {
      char2Index = 0;
      l2 = l2.next;
    }
    /**
     * Input (List A) = "he" -> "ll" -> "o"
Input (List B) = "hel" -> "l" -> "oe"
     */

    if(!l1 || !l2) {
      exit;
    }

    if(l1.value[char1index] !== l2.value[char2Index]) {
      return false;
    } else {
      char1index++;
      char2Index++;
    }
  }

  if(l1 || l2) {
    return false;
  }

  return true;
}

```