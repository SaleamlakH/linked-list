class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
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
}
