class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  #head = null;
  #tail = null;
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
    // traverse to the node
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

    // update tail if the list is empty
    if (!this.#head) this.#tail = null;

    return value;
  }

  contains(value) {
    return this.findIndex(value) >= 0;
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
      node = node.nextNode;
    }

    return string += null;
  }

  insertAt(index, ...values) {
    if (index >= this.#length) {
      throw new RangeError(`Index must be between 0 and ${this.#length}`);
    }

    let node = this.#head;

    // traverse through the list to the given index
    for (let i = 0; i < index - 1; i++) {
      node = node.nextNode;
    }

    // inserting each values to the list
    values.forEach((value, valueIndex) => {
      let newNode = new Node(value);

      if (index === 0 && valueIndex === 0) {
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

  removeAt(index) {
    if (index < 0 || index >= this.#length) {
      throw new RangeError(`Index must be between 0 and ${this.#length}`);
    }

    let node = this.#head;

    // traverse through the list to the given index
    for (let i = 0; i < index - 1; i++) {
      node = node.nextNode;
    }

    if (index === 0) {
      this.#head = this.#head.nextNode;

      // update tail if the list is empty
      if (!this.#head) this.#tail = null;

      this.#length--;
      return node.value;
    }

    let targetNode = node.nextNode;
    node.nextNode = targetNode.nextNode;

    // update the tail if it is the last node
    if (!targetNode.nextNode) this.#tail = node;

    this.#length--;
    return targetNode.value;
  }
}
