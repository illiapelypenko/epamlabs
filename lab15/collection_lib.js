class Collection {
  constructor() {
    this.arr = [];
  }
  get size() {
    return this.arr.length;
  }
  get isEmpty() {
    return this.arr.length > 0 ? false : true;
  }
  clear() {
    this.arr = [];
  }
  add(item) {
    this.arr.push(item);
  }
  remove(item) {
    this.arr.splice(this.arr.findIndex(i => i === item), 1);
  }
  contains(item) {
    if (this.arr.find(i => i === item)) {
      return true;
    }
    return false;
  }
}

class Queue extends Collection {
  constructor() {
    super();
  }
  get first() {
    return this.arr[0];
  }
  get last() {
    return this.arr[this.arr.length - 1];
  }
  remove() {
    return this.arr.shift();
  }
}

class FixedArray extends Collection {
  constructor(maxLength) {
    super();
    this.maxLength = maxLength;
    for (let i = 0; i < maxLength; i++) {
      this.arr.push(null);
    }
  }
  add(item) {
    if (this.arr.length !== this.maxLength) {
      this.arr.push(item);
    } else {
      throw new RangeError("max length is reached");
    }
  }
  insertAt(index, item) {
    if (index < this.arr.length) {
      this.arr.splice(index, 1, item);
    } else {
      throw new RangeError("max length is reached");
    }
  }
  getAt(index) {
    if (index < this.arr.length) {
      return this.arr[index];
    } else {
      throw new RangeError("max length is reached");
    }
  }
}

class Set extends Collection {
  constructor() {
    super();
  }
  add(item) {
    !this.isInSet(item) ? this.arr.push(item) : null;
  }
  isInSet(item) {
    if (this.arr.find(i => i === item)) {
      return true;
    }
    return false;
  }
  intersect(set) {
    const result = new Set();
    for (let item of set.arr) {
      if (this.arr.find(i => i === item) && set.arr.find(i => i === item)) {
        result.add(item);
      }
    }
    return result;
  }
  union(set) {
    const result = new Set();
    for (let item of set.arr) {
      result.add(item);
    }
    for (let item of this.arr) {
      result.add(item);
    }
    return result;
  }
}
