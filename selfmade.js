function show() {
  let name = document.getElementById("name").value;
  document.getElementById("ntitle").innerText = name;
}
function changeColor() {
  document.body.style.backgroundColor = "lightblue";
}
//for create element add element take input

function additem(){
  let li = document.createElement("li");
  let input = document.getElementById("text")
  li.innerText = input.value;
  document.getElementById("list").appendChild(li) = input;
  input.value = " ";
}
function removeitem(){
  let list = document.getElementById("list");
  list.removeChild(list.lastElementChild)
}