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
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
    }

    this.#tail.nextNode = node;
    this.#tail = node;

    this.#length++;
  }

  prepend(value) {
    let node = new Node(value);

    node.nextNode = this.#head;
    this.#head = node;

    this.#length++;
  }

  at(index) {
    if (!this.#head || index >= this.#length) {
      return undefined;
    }

    let node = this.#head;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }

    return node.value;
  }

  pop() {
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
}
