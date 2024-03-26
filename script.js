function firstWord(s) {
  // your code here
	if(s.length == 0) return ""
let arr = s.split(" ");
return arr[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
