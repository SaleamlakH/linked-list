import { LinkedList } from 'linked-list';

let list;

describe('Linked list', () => {
  beforeEach(() => {
    list = new LinkedList();
  });

  describe('Head', () => {
    test('Return undefined for an empty list', () => {
      expect(list.head()).toBe(undefined);
    });
  });

  describe('Append', () => {
    test('Add the first node', () => {
      list.append('dog');

      expect(list.head()).toBe('dog');
      expect(list.size()).toBe(1);
    });

    test('Add additional node at the end', () => {
      list.append('dog');
      list.append('cat');

      expect(list.head()).toBe('dog');
      expect(list.tail()).toBe('cat');
      expect(list.size()).toBe(2);
    });
  });

  describe('Prepend', () => {
    test('Add a node at the start of the list', () => {
      list.append('dog');
      list.prepend('cat');

      expect(list.head()).toBe('cat');
      expect(list.at(1)).toBe('dog');
    });

    test('Update tail when prepending to an empty list', () => {
      list.prepend('cat');

      expect(list.tail()).toBe('cat');
    });
  });

  describe('At', () => {
    beforeEach(() => {
      list.append('dog');
      list.append('cat');
      list.append('parrot');
      list.append('hamster');
      list.append('snake');
      list.append('turtle');
    });

    test('Return a value at a given index', () => {
      expect(list.at(0)).toBe('dog');
      expect(list.at(1)).toBe('cat');
      expect(list.at(4)).toBe('snake');
    });

    test('Return undefined for out of bound index', () => {
      expect(list.at(-1)).toBe(undefined);
      expect(list.at(6)).toBe(undefined);
    });
  });

  describe('Shift', () => {
    test('Removes the head node and return its value', () => {
      list.append('dog');
      list.append('cat');

      expect(list.shift()).toBe('dog');
      expect(list.head()).toBe('cat');
    });

    test('Updates tail when removing the only node', () => {
      list.append('dog');
      list.shift();

      expect(list.tail()).toBe(undefined);
    });

    test('Returns undefined when called on empty list', () => {
      expect(list.shift()).toBe(undefined);
    });
  });

  describe('Contains', () => {
    beforeEach(() => {
      list.append('dog');
      list.append('cat');
      list.append('parrot');
      list.prepend('hamster');
    });

    test('Return true when value exists', () => {
      expect(list.contains('cat')).toBe(true);
      expect(list.contains('hamster')).toBe(true);
    });

    test('Return false when value does not exist', () => {
      expect(list.contains('snake')).toBe(false);
    });
  });

  describe('Find index', () => {
    beforeEach(() => {
      list.append('dog');
      list.append('cat');
      list.append('parrot');
    });

    test('Return the index of an existing value', () => {
      expect(list.findIndex('cat')).toBe(1);
    });

    test('Return -1 when the value does not exist', () => {
      expect(list.findIndex('hamster')).toBe(-1);
    });
  });

  describe('To string', () => {
    test('Returns a string representation of the list', () => {
      list.append('dog');
      list.append('cat');

      expect(list.toString()).toBe('( dog ) -> ( cat ) -> null');
    });
  });

  describe('Insert at', () => {
    beforeEach(() => {
      list.append('dog');
      list.append('cat');
    });

    test('Insert a node at a given index', () => {
      list.insertAt(1, 'parrot');
      expect(list.toString()).toBe('( dog ) -> ( parrot ) -> ( cat ) -> null');
    });

    test('Insert multiple nodes at a given index', () => {
      list.insertAt(1, 'parrot', 'hamster');
      expect(list.toString()).toBe(
        '( dog ) -> ( parrot ) -> ( hamster ) -> ( cat ) -> null',
      );
    });
    test('Insert a node at the start of the list', () => {
      list.insertAt(0, 'hamster');
      expect(list.toString()).toBe('( hamster ) -> ( dog ) -> ( cat ) -> null');
    });

    test('Insert multiple nodes at the start of the list', () => {
      list.insertAt(0, 'hamster', 'parrot');
      expect(list.toString()).toBe(
        '( hamster ) -> ( parrot ) -> ( dog ) -> ( cat ) -> null',
      );
    });

    test('Throw RangeError when index is out of bounds', () => {
      // the function call must be wrap in a function
      expect(() => list.insertAt(2, 'parrot')).toThrow(RangeError);
    });
  });

  describe('Remove at', () => {
    beforeEach(() => {
      list.append('dog');
      list.append('cat');
      list.append('parrot');
    });

    test('Remove a node at a given index and return its value', () => {
      expect(list.removeAt(1)).toBe('cat');
    });

    test('Remove the last node and update the tail', () => {
      expect(list.removeAt(2)).toBe('parrot');
      expect(list.tail()).toBe('cat');
    });

    test('Remove a node at index 0', () => {
      expect(list.removeAt(0)).toBe('dog');
    });

    test('Remove the only node in a single-node list', () => {
      list = new LinkedList();
      list.append('dog');

      expect(list.removeAt(0)).toBe('dog');
      expect(list.head()).toBe(undefined);
      expect(list.tail()).toBe(undefined);
    });

    test('Throw RangeError when index is out of bound', () => {
      // the call must be wrapped in a function
      expect(() => list.removeAt(3)).toThrow(RangeError);
      expect(() => list.removeAt(-1)).toThrow(RangeError);
    });
  });
});
