function varr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}
let revers = varr("hello");
console.log(revers);
