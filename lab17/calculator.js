window.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    if (+e.target.innerText || e.target.innerText === "0") {
      input.innerText += e.target.innerText;
    }
    if (e.target.innerText === "C") {
      input.innerText = "";
    }
    if (e.target.innerText === "S") {
      results.innerHTML += `<p>${input.innerText}</p>`;
    }
  }
});
