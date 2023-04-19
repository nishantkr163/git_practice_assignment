let str = "madam";

let bag = "";
for(let i=str.length-1; i>0; i--) {
  bag += str[i];
}

(str===bag) ? console.log("Palindrome") : console.log("Not palindrome");