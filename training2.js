// function quickSort(arr){
//     if(arr.length <=0){
//         return arr
//     }
//     let pivot = arr[0]
//     let left = []
//     let right = []

//     for(let i=1 ;i<arr.length ;i++){
//         if(arr[i] < pivot ){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }


// let arr=[4,5,6,72,4,7658,556778,8]
// console.log(quickSort(arr));

//  function mergeSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left,right)
//  }

//  function merge(left,right){
//     let sortArr = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             sortArr.push(left.shift(left))
//         }else{
//             sortArr.push(right.shift())

//         }
//     }
//     return [...sortArr,...left,...right]
//  }

//  const arr = [6,4,32,5,7676,34,6,7881,561,1,44]
//  console.log(mergeSort(arr));
 

// function swap(heap,index1,index2){
//     [heap[index1],heap[index2]] = [heap[index2],heap[index1]]
// }

// function heapify(heap,index,heapSize){
//     let left = 2*index+1
//     let right = 2*index+2
//     let small = index

//     if(left < heapSize && heap[left] < heap[small]){
//         small = left
//     }
//     if(right < heapSize && heap[right] < heap[small]){
//         small = right
//     }
//     if(small !== index){
//         swap(heap,index,small)
//         heapify(heap,small,heapSize)
//     }
// }

// function minHeap(arr){
//     for(let i=Math.floor(arr.length/2);i>=0;i--){
//         heapify(arr,i,arr.length)
//     }
//     return arr
// }

// function heapSort(arr){
//     minHeap(arr)
//     for(let i=arr.length - 1;i>=0;i--){
//         swap(arr,0,i)
//         heapify(arr,0,i)
//     }
//     return arr
// }

// const arr = [9,6,7,321,3234,6,78,921,12,1]
// console.log(heapSort(arr));


// class Node {
//     constructor(data){
//         this.data = data 
//         this.next = null
//     }

// }
// class LikedList{
//     constructor(){
//         this.head = null
//     }

//     insert(data){
//         let newNode = new Node(data)
//         if(this.head === null){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//     }

//     update(oldData,newData){
//         let current = this.head
//         while(current){
//             if(current === oldData){
//                 current = newData
//             }
//             current = current.next
//         }
//     }

//     delete(data){
//         if(!this.head){
//             return console.log("list is empty");
            
//         }
//         if(this.head === data){
//             this.head = this.head.next
//         }

//         let current = this.head
//         while(current.next && current.next.data !== data){
//             current = current.next
//         }

//         if(current.next){
//             current.next = current.next.next
//         }else{
//             console.log("data has not found");
            
//         }
//     }

//     display(){
//         let current= this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
            
//         }
//     }
// }

// const list = new LikedList()

// list.insert(7)
// list.insert(37)
// list.insert(72)
// list.insert(75)

// list.delete(75)
// list.display()


// class TreeNode{
//     constructor(data){
//         this.value = data
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }

//     insert(data){
//         let newNode = new TreeNode(data)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if( newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left , newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                 return this.search(root.left , value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     display(root = this.root){
//         if(root){
//             console.log(root.value);
//             this.display(root.left)
//             this.display(root.right)
            
//         }
//     }
// }

// let bst = new BinarySearchTree()

// bst.insert(77)
// bst.insert(727)
// bst.insert(72)
// bst.insert(71)

// console.log("search is found",bst.search(bst.root,702));

// bst.display()


// class Graph {
//     constructor(){
//         this.adjList = new Map()
        
//     }

//     addVertex(vertex){
//         if(!this.adjList.has(vertex)){
//             this.adjList.set(vertex,[])
//         }else{
//             console.log("vertext is allready here");
            
//         }
//     }

//     addEdge(vertex1, vertex2){
//         if(!this.adjList.has(vertex1) && !this.adjList.has(vertex2)){
//             console.log("datjhagsdjhsagdj");
            
//         }else{
//             this.adjList.get(vertex1).push(vertex2)
//             this.adjList.get(vertex2).push(vertex1)

//         }
//     }

//     bfs(sNode){
//         const visited = new Set()
//         const queue = []
//         const result = []

//         visited.add(sNode)
//         queue.push(sNode)

//         while(queue.length){
//             const vertex = queue.shift()
//             result.push(vertex)
//             const neighbors = this.adjList.get(vertex)
//             for(let neighbor of neighbors){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }
//     printGraph(){
//         for(let [vertex,edge] of this.adjList){
//             console.log(`${vertex},->,${edge}`);
            
//         }
//     }
// }

// let graph = new Graph()

// graph.addVertex("a")
// graph.addVertex("b")
// graph.addVertex("c")
// graph.addVertex("d")

// graph.addEdge("a","b")
// graph.addEdge("c","b")
// graph.addEdge("c","a")

// console.log("-----------------",graph.bfs("a"));


// graph.printGraph()


// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//     }
//     insert(data){
//         let newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//     }

//     update(oldData,newData){
//         let current =this.head
//         while(current){
//             if(current.data === oldData){
//                 current.data = newData
//             }
//             current =current.next
//         }
//     }

//     delete(data){
//         if(!this.head)return console.log("list is empty");
//         if(!this.head === data){
//             this.head = this.head.next
//         }
        
//     }

//     display(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
            
//         }
//     }
// }

// let list = new LinkedList()

// list.insert(7)
// list.insert(72)
// list.insert(17)
// list.insert(67)
// list.update(72,3)
// list.display()


// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.root = null
//     }
//     insert(data){
//         let newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode

//         }else{
//            let current = this.head
//            while(current.next){
//             current=current.next
//            } 
//            current.next = newNode
//         }
//     }

//     update(oldData,newData){
//         let current = this.head
//         while(current){
//             if(current.data === oldData){
//                 current.data = newData
//             }
//             current = current.next
//         }

//     }

//     delete(data){
//         if(!this.head) return console.log("list is empty");

//         if(this.head.data === data){
//             this.head = this.head.next;
//             return 
//         }
//             let current =this.head
//             while(current.next && current.next.data !== data){
//                 current = current.next
//             }

//             if(current.next){
//                 current.next = current.next.next
//             }else{
//                 console.log("not found");
                
//             }
        
        
//     }

//     display(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }

// const list = new LinkedList()

// list.insert(7)
// list.insert(8)
// list.insert(1)
// list.insert(2)
// list.insert(3)
// list.insert(4)
// list.insert(5)
// list.update(7,9)
// list.delete(9)
// list.display()


// class TreeNode{
//     constructor(data){
//         this.value = data
//         this.left = null
//         this.right =null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(data){
//         let newNode =new TreeNode(data)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }

//     }
//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root ===null){
//             return root
//         }
//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right) return null
//             if(!root.left) return root.right;
//             if(!root.right) return root.right;

//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.value,root.right)
//         }
//         return root
//     }

//     preOrder(root=this.root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
            
//         }
//     }
// }

// const bst = new BinarySearchTree()

// bst.insert(1)
// bst.insert(2)
// bst.insert(3)
// bst.insert(4)
// bst.delete(4)
// console.log("search found is -",bst.search(bst.root,1));

// bst.preOrder()


// function quickSort(arr){
//     if(arr.length <= 0){
//         return arr
//     }
//     let pivot = arr[0]
//     let left =[]
//     let right = []

//     for(let i=1;i<arr.length ;i++){
//         if(arr[i]< pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [4,4,654,4,3,1,4,78,88]
// console.log(quickSort(arr));


// function mergeSort(arr){
//     if(arr.length <=1){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left,right)
// }

// function merge(left,right){
//     let sortArr = []
//     while(left.length&&right.length){
//         if(left[0] < right[0]){
//             sortArr.push(left.shift())
//         }else{
//             sortArr.push(right.shift())
//         }
//     }
//     return [...sortArr,...left,...right]

// }

// let arr= [5,7,879,4,3,2,23,44,5,56]
// console.log(mergeSort(arr));

// function swap(heap,index1,index2){
//     [heap[index1],heap[index2]]=[heap[index2],heap[index1]]
// }
// function heapify(heap,index,heapSize){
//     let left = 2 * index+1
//     let right = 2 * index+2
//     let small = index

//     if(left < heapSize && heap[left] < heap[small]){
//         small = left
//     }
//     if(right < heapSize && heap[right] < heap[small]){
//         small = right
//     }
//     if(small !== index){
//         swap(heap,index,small)
//         heapify(heap,small,heapSize)
//     }
// }

// function minHeap(arr){
//     for(let i=Math.floor(arr.length/2);i>=0;i--){
//         heapify(arr,i,arr.length)
//     }
//     return arr
// }
// function heapSort(arr){
//     minHeap(arr)
//     for(let i=arr.length-1;i>=0;i--){
//         swap(arr,0,i)
//         heapify(arr,0,i)
//     }
//     return arr
// }

// const arr = [5,6,7,8,1,2]
// console.log(heapSort(arr));


// class Graph{
//     constructor(){
//         this.adjList = new Map()
//     }
//     addVertex(vertex){
//         if(!this.adjList.has(vertex)){
//             this.adjList.set(vertex,[])
//         }else{
//             console.log("vertex is laready ibn there");
            
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjList.has(vertex1) && !this.adjList.has(vertex2)){
//             console.log("jsdbjfvsd");
            
//         }else{
//             this.adjList.get(vertex1).push(vertex2)
//             this.adjList.get(vertex2).push(vertex1)
//         }
//     }

//     bfs(sNode){
//         const visited = new Set()
//         const queue =[]
//         const result = []

//         visited.add(sNode)
//         queue.push(sNode)

//         while(queue.length){
//             const vertex = queue.shift()
//             result.push(vertex)

//             const neighbors = this.adjList.get(vertex)
//             for(let neighbor of neighbors){
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//         return result
//     }
//     printGraph(){
//         for(let [vertex,edge] of this.adjList){
//             console.log(`${vertex},->,${edge}`);  
//         }
//     }
// }

// let graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.addEdge("C","B")

// console.log(graph.bfs("B"));


// graph.printGraph()

