class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insert(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }
    

    update(oldData, newData){
        let current = this.head
        while(current){
            if(current.data === oldData){
                current.data = newData
            }
            current = current.next
        }
    }
    delete(data) {
        if (!this.head) return console.log("List is empty.");

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        } else {
            console.log(`${data} not found in the list.`);
        }
    }

    removeOddNumbers(){
        while(this.head.data %2 !==0){
            this.head = this.head.next
        }
        let current = this.head
        while(current && current.next){
            if(current.next.data % 2 !== 0){
                current.next = current.next.next
            }else{
                current = current.next
            }
        }
    }


    display(){
        let current = this.head
        
        while(current){
            console.log(current.data)
            current = current.next
        }
        
    }
}

let list = new LinkedList()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.removeOddNumbers()
list.update(12,99) 

list.display()