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

  test('Add a new node at the start', () => {
    list.append('dog');
    list.prepend('cat');

    expect(list.head()).toBe('cat');
    expect(list.at(1)).toBe('dog');
  });
});
