class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  #head;
  #tail;
  #length = 0;

  head() {
    return this.#head ? this.#head.value : undefined;
  }

  tail() {
    return this.#tail ? this.#tail.value : undefined;
  }

  size() {
    return this.#length;
  }

  append(value) {
    let node = new Node(value);

    if (!this.#head) this.#head = node;
    else this.#tail.nextNode = node;

    this.#tail = node;
    this.#length++;
  }

  prepend(value) {
    let node = new Node(value);

    node.nextNode = this.#head;
    this.#head = node;

    // update the tail if the head  were null
    if (!node.nextNode) this.#tail = node;

    this.#length++;
  }

  at(index) {
    if (!this.#head || index >= this.#length || index < 0) {
      return undefined;
    }

    let node = this.#head;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }

    return node.value;
  }

  shift() {
    if (!this.#head) return undefined;

    let value = this.#head.value;

    this.#head = this.#head.nextNode;
    this.#length--; 

    return value;
  }

  contains(value) {
    let node = this.#head;
    while (node) {
      if (node.value === value) return true;

      node = node.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let node = this.#head;
    let index = 0;
    while (node) {
      if (node.value === value) return index;

      node = node.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    let node = this.#head;
    let string = '';

    while (node) {
      string += `( ${node.value} ) -> `;
      if (node.nextNode === null) {
        string += 'null';
      }

      node = node.nextNode;
    }

    return string;
  }

  insertAt(index, ...values) {
    if (index >= this.#length) {
      throw new RangeError(`Index must be between 0 and ${this.#length}`);
    }

    let node = this.#head;
    for (let i = 0; i < index - 1; i++) {
      node = node.nextNode;
    }

    values.forEach((value) => {
      let newNode = new Node(value);

      if (!this.#head.nextNode) {
        newNode.nextNode = this.#head;
        this.#head = newNode;
      } else {
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
      }

      node = newNode;
      this.#length++;
    });
  }
}
