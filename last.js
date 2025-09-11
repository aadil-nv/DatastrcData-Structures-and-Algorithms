class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
        
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    insert(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                
                current = current.next
            }
            current.next = newNode
            newNode.prev = current
        }
    }
    update(oldData , newData){
        let current = this.head
        while(current.next){
            if(current.data === oldData){
                current.data = newData
            }
            current = current.next
        }
    }
    // delete(data){
    //     if(!this.head)return console.log("list is empty")
    //     if(this.head.data === data){
    //         this.head = this.head.next
    //     } 
    //     let current = this.head
    //     while(current.next && current.next.data !== data){
    //         current = current.next
    //     }
    //     if(current.next){
    //         current.next = current.next.next
    //     }else{
    //         console.log("the element is not found")
    //     }
        
    // }
    removeOdd(){
        while(this.head && this.head.data%2 !== 0){
            this.head = this.head.next
        }
        let current = this.head
        while(current.next && current.next.data % 2 !==0 ){
            current.next= current.next.next
        }
        current = current.next
    }
    isDoubly(){
        let current = this.head
        if(!current || !current.next) return true;
        while(current.next){
            if(current.next.prev !== current){
                return flase
            }
            current = current.next
        }
        return true
        
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


console.log("is doubly linked"+list.isDoubly())

list.display()