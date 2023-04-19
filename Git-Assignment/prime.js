let num = 24;

let factor=0;
for(let i=1; i<=num; i++) {
  if(num%i===0) {
    factor++;
  }
}

if(factor==2) {
  console.log("Prime number");
}
else {
  console.log("Not a prime number");
}