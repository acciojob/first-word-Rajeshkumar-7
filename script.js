function firstWord(s) {
  // your code here
	let arr = s.split(" ");
for(let i=0;i<arr.length;i++){
	if(arr[i].length > 0){
        return arr[i]
    }
}
return "" 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
