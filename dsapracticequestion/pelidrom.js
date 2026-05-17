function pelidromf(str) {
  str = str.toLowerCase();
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  if(reversed == str){
    console.log("This String is Palidrome")
  }
  else{
    console.log("This String is a not Palidrome")
  }
   return reversed;
}
let nvalue = pelidromf("Level");
