import { LinkedList } from 'linked-list';

let list;

describe('Linked list', () => {
  beforeEach(() => {
    list = new LinkedList();
  });

  test('Return undefined if the list is empty', () => {
    expect(list.head()).toBe(undefined);
  });

  test('Add a new head node', () => {
    list.append('dog');

    expect(list.head()).toBe('dog');
    expect(list.size()).toBe(1);
  });

  test('Append a new node at the end', () => {
    list.append('dog');
    list.append('cat');

    expect(list.head()).toBe('dog');
    expect(list.tail()).toBe('cat');
    expect(list.size()).toBe(2);
  });

  test('Return a value at index 1', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');

    expect(list.at(1)).toBe('cat');
  });

  test('Return a value at index 4', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');
    list.append('hamster');
    list.append('snake');
    list.append('turtle');

    expect(list.at(4)).toBe('snake');
  });

  test('Return a value at index 0', () => {
    list.append('dog');
    expect(list.at(0)).toBe('dog');
  });

  test('Return undefined if there is no node at index', () => {
    expect(list.at(0)).toBe(undefined);
    expect(list.at(3)).toBe(undefined);
  });

  test('Prepend to empty list update tail', () => {
    list.prepend('cat');

    expect(list.tail()).toBe('cat');
  });

  test('Add a new node at the start', () => {
    list.append('dog');
    list.prepend('cat');

    expect(list.head()).toBe('cat');
    expect(list.at(1)).toBe('dog');
  });

  test('Remove the head node and return its value', () => {
    list.append('dog');
    list.append('cat');

    expect(list.pop()).toBe('dog');
    expect(list.head()).toBe('cat');
  });

  test('Return true if the value is in the list', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');
    list.prepend('hamster');

    expect(list.contains('cat')).toBe(true);
    expect(list.contains('hamster')).toBe(true);
  });

  test('Return false if the value is not in the list', () => {
    list.append('cat');
    list.append('parrot');

    expect(list.contains('dog')).toBe(false);
  });

  test('Return the index of a node containing a value', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');

    expect(list.findIndex('cat')).toBe(1);
  });

  test('Return -1 if there is no node containing a value', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');

    expect(list.findIndex('hamster')).toBe(-1);
  });

  test('Returns the list as a string', () => {
    list.append('dog');
    list.append('cat');

    expect(list.toString()).toBe('( dog ) -> ( cat ) -> null');
  });

  test('Insert new node at a given index', () => {
    list.append('dog');
    list.append('cat');

    list.insertAt(1, 'parrot');
    expect(list.toString()).toBe('( dog ) -> ( parrot ) -> ( cat ) -> null');
  });

  test('Insert multiple nodes at a given index', () => {
    list.append('dog');
    list.append('cat');

    list.insertAt(1, 'parrot', 'hamster');
    expect(list.toString()).toBe(
      '( dog ) -> ( parrot ) -> ( hamster ) -> ( cat ) -> null',
    );
  });

  test('Insert nodes at index 0', () => {
    list.append('dog');

    list.insertAt(0, 'cat');
    expect(list.toString()).toBe('( cat ) -> ( dog ) -> null');
  });

  test('Insert multiple nodes at index 0', () => {
    list.append('dog');

    list.insertAt(0, 'cat', 'parrot');
    expect(list.toString()).toBe('( cat ) -> ( parrot ) -> ( dog ) -> null');
  });

  test('Throw RangeError if insert index is out of bounds', () => {
    list.append('dog');
    list.append('cat');

    // the function call must be wrap in a function
    expect(() => list.insertAt(2, 'parrot')).toThrow(RangeError);
  });
});
