import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

const CASES = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};

const CASE_ARRAY = Object.entries(CASES).sort((a, b) => b[1] - a[1]);

function printForCount(str, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

function deriveRoman(num) {
  let result = "";

  CASE_ARRAY.forEach(([symbol, value]) => {
    const count = Math.floor(num / value);
    result += printForCount(symbol, count);
    num %= value;
  });

  return result;
}

const SecondPage = () => {
  const [input, setInput] = useState(0);

  return (
    <Layout>
      <SEO title="Roman" />
      <h1>Integer to Roman</h1>
      <input
        type="number"
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <p>{deriveRoman(input)}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;
