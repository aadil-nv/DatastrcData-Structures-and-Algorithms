class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("List:", result.join(" <-> "));
    }

    reverse() {
        let current = this.head;
        let temp = null;
        let i=0
        let k=0

        while (current) {
            k++
            console.log("kkkkkkkkkkkkkkkkkkkk s ==>",k)
            temp = current.prev;
            console.log("temp==>",temp)
            current.prev = current.next;
            console.log("current.prev ==>",current.prev)
            
            current.next = temp;
            console.log("current.next ==>",current.next)
            
            current = current.prev; // move to next (was prev before swap)
            console.log("current ==>",current)
        }

        // Swap head and tail
        if (temp) {
            i++
            console.log("********************* s ==>",i)
            this.tail = this.head;
            console.log("this.tail ==>",this.tail)
            this.head = temp.prev;
            console.log("this.head==>",this.head)
        }
    }
}

// ▶️ Test it
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("Before Reverse:");
list.print();

list.reverse();

console.log("After Reverse:");
list.print();
