let parametrs = document.getElementsByClassName("parametrs");
let div = document.getElementById("block");
let number = document.querySelectorAll(".textParam");
let text = document.getElementById("text");
let btn = document.querySelector("button");

for (let i = 0; i < parametrs.length; ++i) {
  parametrs[i].addEventListener("input", function () {
    number[i].value = this.value;
    changeDivRadius();
  });
}

function changeDivRadius() {
  let t =
    parametrs[0].value +
    "px " +
    parametrs[1].value +
    "px " +
    parametrs[2].value +
    "px " +
    parametrs[3].value +
    "px";
  div.style.borderRadius = t;
  text.textContent = "border-radius: " + t;
}

for (let i = 0; i < number.length; ++i) {
  number[i].addEventListener("input", function () {
    parametrs[i].value = this.value;
    changeDivRadius();
  });
}

btn.addEventListener("click", function () {
  for (let elem of parametrs) {
    elem.value = '0';
  }
  for (let elem of number) {
    elem.value = '0';
  }
  changeDivRadius();
});
