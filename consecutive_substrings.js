function consecutiveSubstrings(string) {
  // type your code here
  //slidow window: use two pointers: start&end
  const ans = [];
  const n = string.length;

  for (let start=0; start<n; start++) {
    for (let end=start+1; end<=n; end++){
      ans.push(string.slice(start, end));
    }
  }
  return ans;
}
console.log(consecutiveSubstrings('efgh'));


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


