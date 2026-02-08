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
});
