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
}
