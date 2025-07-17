let button = document.querySelector(".changeBtn");
let hexCode = document.querySelector(".hexCode");

//Generate a Random Hex Color Code
function RandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; //Math.random generates a random decimal number between 0 and 1 || Math.Floor rounds a number towards -ve infinity
  }
  return color;
}

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor =  RandomColor();
// });

//Repeats a task after a specified delay
setInterval(() => {
  const newColor = RandomColor();
  document.body.style.backgroundColor = newColor;
  hexCode.textContent = newColor;
}, 1000);
