let a = true;
let b = false;
let c = true;

console.log(a && b || c);      
console.log((a || b) && !c);      
console.log(a && (b || c) && !b);  
console.log(!a || !b || !c);