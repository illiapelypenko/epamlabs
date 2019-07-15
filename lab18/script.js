function handleSubmit(e) {
  e.preventDefault();

  document.cookie = `background=${document.querySelector("select").value}`;
  document.cookie = `fontSize=${document.querySelector(".fontSize").value}`;

  localStorage.setItem("background", document.querySelector("select").value);
  localStorage.setItem("fontSize", document.querySelector(".fontSize").value);

  document.querySelector("body").style.background = document.querySelector(
    "select"
  ).value;
  document.querySelector("body").style.fontSize =
    document.querySelector(".fontSize").value + "px";

  document.querySelector("select").value = "";
  document.querySelector(".fontSize").value = "";
}

function handleLoadCookie(e) {
  let cookies = document.cookie.split("; ");

  let bg = cookies.find(bg => bg.includes("background"));
  bg = bg.slice(bg.indexOf("=") + 1);
  document.querySelector("body").style.background = bg;

  let fs = cookies.find(fs => fs.includes("fontSize"));
  fs = fs.slice(fs.indexOf("=") + 1);
  document.querySelector("body").style.fontSize = fs + "px";
}

function handleLoadLocalStorage(e) {
  document.querySelector("body").style.background = localStorage.getItem(
    "background"
  );
  document.querySelector("body").style.fontSize =
    localStorage.getItem("fontSize") + "px";
}

document.querySelector("form").addEventListener("submit", handleSubmit);
// window.addEventListener("DOMContentLoaded", handleLoadCookie);
window.addEventListener("DOMContentLoaded", handleLoadLocalStorage);
