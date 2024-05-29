class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    return current;
  }

  at(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let currentIndx = 0;
    let current = this.head;
    while (current.next) {
      if (currentIndx === index) {
        return current;
      } else {
        currentIndx++;
        current = current.next;
      }
    }
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    const value = current.value;
    prev.next = null;
    this.size--;
    return value;
  }

  contains(value) {
    if (this.size < 1) {
      return false;
    }
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
      let current = this.head;
      let currIndex = 0;
      while (current) {
        if (current.value === value) {
          return currIndex;
        }
        current = current.next;
        currIndex++;
        }
    return null
    }

    toString(){
        let string = "";
        let current = this.head;
        while(current){
            if (current.next){
                string += `( ${current.value} ) -> `
                current = current.next;
            }
            else {
                string += `( ${current.value} ) -> null`
                break;
            }
        }
        return string;
    }

    insertAt(index, value){
        if (index < 0 || index >= this.size){
            return;
        }

        const newNode = new Node(value);
        let current = this.head
        let previous;
        let count = 0;
        while (count < index){
            previous = current;
            current = current.next;
            count++
        }
        newNode.next = current;
        previous.next = newNode
        this.size++;
    }

    removeAt(index){
        if (index < 0 || index >= this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;
        
        if (index === 0){
            this.head = current.next;
        } else {
            while (count < index){
                previous = current;
                current = current.next
                count++
            }
            previous.next = current.next;
        }
        this.size--;
        return current.value;
    }
}

const test = new LinkedList();
test.append(2);
console.log(test.toString());
test.append(4);
console.log(test.toString());
test.append(6);
console.log(test.toString());
test.prepend(204);
console.log(test.toString());

console.log(test);
console.log(test.head);
console.log(test.tail());
console.log(test.at(2));
console.log(test.pop());
console.log(test);

console.log(test.contains(204));
console.log(test.contains(1));
console.log(test);
console.log(test.find(204));
console.log(test.toString());

console.log(test.insertAt(2, 10));
console.log(test.toString());

console.log(test.removeAt(2));
console.log(test.toString());gi