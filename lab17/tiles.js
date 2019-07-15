document.querySelector(".enter").addEventListener("mouseenter", e => {
  e.target.style.background = "red";
});

document.querySelector(".out").addEventListener("mouseout", e => {
  e.target.style.background = "lightgreen";
});

document.querySelector(".over").addEventListener("mouseover", e => {
  e.target.style.background = "yellow";
  document.querySelector(".over").innerText =
    Number.parseInt(document.querySelector(".over").innerText) + 1;
});

document.querySelector(".down").addEventListener("mousedown", e => {
  e.target.style.background = "grey";
});

document.querySelector(".up").addEventListener("mouseup", e => {
  e.target.style.background = "white";
});

document.querySelector(".click").addEventListener("click", e => {
  e.target.style.background = "blue";
});
