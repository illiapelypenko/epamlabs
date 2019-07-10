function my$(query) {
  return new Xquery(document.querySelectorAll(query));
}

class Xquery {
  constructor(elements) {
    this.elements = elements;
  }

  get length() {
    return this.elements.length;
  }

  eq(n) {
    return new Xquery([this.elements[n]]);
  }

  gt(n) {
    return new Xquery(Array.from(this.elements).slice(n + 1));
  }

  lt(n) {
    return new Xquery(Array.from(this.elements).slice(0, n));
  }

  css(name, value) {
    if (!value) {
      return window.getComputedStyle(this.elements[0])[name];
    } else {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style[name] = value;
      }
    }
  }

  addClass(newClass) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(newClass);
    }
  }

  removeClass(clas) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.remove(clas);
    }
  }

  toggleClass(clas) {
    if (this.elements[0].classList.contains(clas)) {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].classList.remove(clas);
      }
    } else {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].classList.add(clas);
      }
    }
  }

  hasClass(clas) {
    return this.elements[0].classList.contains(clas);
  }

  html(html) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = html;
    }
  }

  text(text) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].innerText = text;
    }
  }
}
