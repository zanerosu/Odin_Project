class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    if (this.head === null) {
      this.head = new Node(key, value);
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.key === key) {
        current.value = value; // Update value if key exists
        return;
      }
      current = current.next;
    }

    if (current.key === key) {
      current.value = value; // Update value if key exists
    } else {
      current.next = new Node(key, value); // Append new node
    }
  }

  find(key) {
    let current = this.head;
    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }
  /**
   * iterates through the linked list and counts how many keys there are.
   */
  countNodes() {
    let count = 0;
    // iterate through the linked list and incremement count for how many nodes.
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  /**
   * Removes the node with the specified key and returns the value.
   * If the key is not found, returns null.
   */
  pop(key) {
    if (this.head === null) {
      return null; // List is empty
    }

    if (this.head.key === key) {
      const value = this.head.value;
      this.head = this.head.next; // Remove the head node
      return value;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.key === key) {
        const value = current.next.value;
        current.next = current.next.next; // Remove the node
        return value;
      }
      current = current.next;
    }

    return null; // Key not found
  }

  getKeys() {
    const keysArray = [];
    let current = this.head;
    while (current !== null) {
      keysArray.push(current.key);
      current = current.next;
    }
    return keysArray;
  }

  /**
   * Returns an array containing all the values in the linked list.
   */
  getValues() {
    const valuesArray = [];
    let current = this.head;
    while (current !== null) {
      valuesArray.push(current.value);
      current = current.next;
    }
    return valuesArray;
  }
}
