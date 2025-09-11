// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }




// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     // Insert a new node at the end of the list
//     insert(data) {
//         const newNode = new Node(data);
//         if (this.head === null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.prev = this.tail;
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }

//     // Update a node's data
//     update(oldData, newData) {
//         let current = this.head;
//         while (current) {
//             if (current.data === oldData) {
//                 current.data = newData;
//                 return; // Assuming unique data; remove return if not
//             }
//             current = current.next;
//         }
//     }

//     // Display the list from head to tail
//     display() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }


// let list = new DoublyLinkedList();

// list.insert(7);
// list.insert(14);
// list.insert(21);
// list.insert(28);

// console.log('Initial list:');
// list.display(); // Output: 7, 14, 21, 28

// list.update(14, 100);

// console.log('Updated list:');
// list.display(); // Output: 7, 100, 21, 28

class Graph{
    constructor(){
        this.adjList= new Map()
    }
    addVertex(vertex){
        if(!this.adjList.has(vertex)){
            this.adjList.set(vertex,[])
        }else{
            console.log("vertex already there");
            
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList.has(vertex1) || !this.adjList.has(vertex2)){
            console.log("vertex  ==");
            
        }else{
            this.adjList.get(vertex1).push(vertex2)
            this.adjList.get(vertex2).push(vertex1)
        }
    }

    findShortPath(start,end){
        if(!this.adjList.has(start) || !this.adjList.has(end)) return -1

        let queue = [start]
        let distance = new Map()
        distance.set(start,0)

        while(queue.length > 0){
            let node = queue.shift();
            let dist = distance.get(node)

            if(node === end) return dist;

            for(let neibour of this.adjList.get(node)){
                if(!distance.has(neibour)){
                    distance.set(neibour,dist+1)
                    queue.push(neibour)
                }
            }
        }
        return -1
    }

    bfs(sNode){
        let visited = new Set()
        let queue = []
        let result = []

        visited.add(sNode)
        queue.push(sNode)
        while(queue.length){
            let vertex = queue.shift()
            result.push(vertex)

            const neighbours = this.adjList.get(vertex)

            for(let neibour of neighbours){
                if(!visited.has(neibour)){
                    visited.add(neibour)
                    queue.push(neibour)
                }
            }
        }
        return result

    }
    printGraph(){
        for(let [vertex,edge] of this.adjList){
            console.log(`${vertex}->${edge}`)
        }
    }
}

let graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","B")

graph.printGraph()
console.log("distance is ",graph.findShortPath("A", "C"));
console.log("distance is ",graph.bfs("A"));
