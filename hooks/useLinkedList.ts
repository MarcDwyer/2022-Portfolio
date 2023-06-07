import { useState } from "https://esm.sh/preact@10.13.1/hooks";

export class Node<T> {
  constructor(public value: T, public next?: Node<T>) {}
}

export const useLinkedList = <T>() => {
  const [head, _setHead] = useState<Node<T>>();
  const [tail, _setTail] = useState<Node<T>>();

  const append = (value: T) => {
    if (!head) {
      const initialNode = new Node(value);
      _setHead(initialNode);
      _setTail(initialNode);
      return;
    }
    if (tail) {
      const prevTail = tail;
      const newTail = new Node(value);
      prevTail.next = newTail;
      _setTail(newTail);
    }
  };
  const rerender = () => {
    if (head && tail) {
      _setHead(new Node(head.value, head.next));
      _setTail(new Node(tail.value, tail.next));
    }
  };
  return {
    head,
    tail,
    append,
    _setHead,
    rerender,
  };
};
