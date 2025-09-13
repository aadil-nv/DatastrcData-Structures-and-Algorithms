class Queue{
    constructor(){
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return console.log("Queue is empty");
            
        }
        return this.queue.shift()
    }
    front(){
        if(this.isEmpty()){
            return console.log("Queue is empty"); 
        }
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length ===0
    }

    printQueue(){
        if(this.isEmpty()){
            return console.log("Queue is empty"); 
        }else{
            for(let i=0;i<this.queue.length;i++){
                console.log(this.queue[i]);
                
            }
        }

    }
}


let que = new Queue()

que.enqueue(8)
que.enqueue(1)
que.enqueue(166)
que.enqueue(0)
que.enqueue(90)
que.dequeue()

que.printQueue()