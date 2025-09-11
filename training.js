// const numbersArray = [
//     { number: 6 },
//     { number: 4 },
//     { number: 3 },
//     { number: 2 },
//     { number: 5 },
//     { number: 1 },
//     { number: 9 },
//     { number: 8 },
//     { number: 7 },
//     { number: 10 }
//   ];

//   function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }

//     // Choose the pivot (last element in this case)
//     const pivot = arr[arr.length - 1];

//     // Recursive function to partition the array
//     const partition = (arr, pivot) => {
//       if (arr.length === 0) return [[], []];

//       const [head, ...tail] = arr;
//       const [left, right] = partition(tail, pivot);

//       if (head.number < pivot.number) {
//         return [[head, ...left], right];
//       } else {
//         return [left, [head, ...right]];
//       }
//     };

//     // Partition the array and recursively sort the left and right subarrays
//     const [left, right] = partition(arr.slice(0, -1), pivot);

//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }                                                                                                                                                                                    

//   const sortedArray = quickSort(numbersArray);
//   console.log(sortedArray);

// class Node {
//   constructor(data){
//     this.data = data
//     this.left = null
//     this.right = null

//   }
// }
// class BinarySearchTree{
//   constructor(){
//     this.root = null
//   }

//   isEmpty(){
//     return this.root === null
//   }
//   insert(data){
//     const newNode = new Node(data)
//     if(this.isEmpty()){
//       this.root = newNode
//     }else{
//       this.insertNode(this.root,newNode)
//     }

//   }
//   insertNode(root , newNode){
//     if(newNode.data < root.data){
//       if(root.left === null){
//         root.left = newNode
//       }else{
//         this.insertNode(root.left,newNode) 
//       }
//     }else{
//       if(root.right === null){
//         root.right = newNode 
//       }else{
//         this.insertNode(root.right , newNode)
//       }
//     }
//   }
//   search(root,value){
//     if(!root){
//       return false
//     }else{
//       if(root.data === value ){
//         return true
//       }else if (value < root.data){
//         return  this.search(root.left ,value)
//       }else{
//         return this.search(root.right,value)
//       }
//     }
//   }

//   min(root){
//     if(!root.left){
//       return root.data
//     }else{
//       return this.min(root.left)
//     }
//   }

//   delete(value){
//    this.root =  this.deleteNode(this.root,value)
//   }
//   deleteNode(root,value){
//     if(root === null) return root;

//     if(value < root.data){
//       root.left = this.deleteNode(root.left,value)
//     }else if(value > root.data){
//       root.right = this.deleteNode(root.right , value)
//     }else{
//       if(!root.left && !root.right) return null;
//       if(!root.left) return root.right;
//       if(!root.right) return root.left;

//       root.data = this.min(root.right);
//       root.right = this.deleteNode(root.right,root.data)
//     }
//     return root
//   }

//   display (root){
//     if(root){
//       console.log(root.data);
//       this.display(root.left)
//       this.display(root.right)
//     }
//   }
// }

// let bst = new BinarySearchTree()

// bst.insert(5)
// bst.insert(6)
// bst.insert(3)
// bst.insert(1)
// bst.insert(4)
// bst.insert(2)


// bst.delete(1)
// bst.delete(2)
// bst.delete(3)
// bst.delete(4)
// bst.delete(44)



// bst.display(bst.root)


// class TreeNode {
//   constructor(data){
//     this.value = data
//     this.left = null
//     this.right = null
//   }
// }
// class BinarySearchTree{
//   constructor(){
//     this.root = null
//   }
//   isEmpty(){
//     return this.root === null
//   }
//   insert(data){
//     let newNode = new TreeNode(data)
//     if(this.isEmpty()){
//       this.root = newNode
//     }else{
//       this.insertNode (this.root,newNode)
//     }
//   }
//   insertNode(root,newNode){
//     if(newNode.value < root.value){
//       if(root.left === null){
//         root.left = newNode
//       }else{
//         this.insertNode(root.left ,newNode)
//       }
//     }else{
//       if(root.right === null){
//         root.right = newNode
//       }else{
//         this.insertNode(root.right,newNode)
//       }
//     }
//   }

//   min(root){
//     if(!root.left){
//       return root.value
//     }else{
//       return this.min(root.left)
//     }
//   }
//   max(root){
//     if(!root.right){
//       return root.value
//     }else{
//       return this.max(root.right)
//     }
//   }

//   delete(data){
//     this.root = this.deleteNode(this.root,data)
//   }
//   deleteNode(root,data){
//     if(root === null) return root
//     if(data < root.value){
//       root.left = this.deleteNode(root.left,data)
//     }else if(data > root.value){
//       root.right = this.deleteNode(root.right,data)
//     }else{
//       if(!root.left && !root.right) return null;
//       if(!root.left) return root.right;
//       if(!root.right) return root.left ;

//       root.value = this.min(root.right)
//       root.right = this.deleteNode(root.right,root.value)
//     }
//     return root
//   }

//   display(root){
//     if(root){
//       this.display(root.left)
//       console.log(root.value);
//       this.display(root.right)
//     }
//   }
// }

// let BST = new BinarySearchTree()

// BST.insert(1)
// BST.insert(2)
// BST.insert(7)
// BST.insert(3)
// BST.insert(13)
// BST.insert(99)
// BST.delete(3)
// console.log("min value is ",BST.min(BST.root));
// console.log("max  value is ",BST.max(BST.root));
// BST.display(BST.root)

// class TreeNode {
//   constructor(data) {
//     this.value = data
//     this.left = null
//     this.right = null
//   }
// }
// class BinarySearchTree {
//   constructor() {
//     this.root = null
//   }
//   isEmpty() {
//     return this.root === null
//   }
//   insert(data) {
//     let newNode = new TreeNode(data)
//     if (this.isEmpty()) {
//       this.root = newNode
//     } else {
//       this.insertNode(this.root, newNode)
//     }
//   }
//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode
//       } else {
//         this.insertNode(root.left, newNode)
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode
//       } else {
//         this.insertNode(root.right, newNode)
//       }
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return false
//     } else {
//       if (root.value === value) {
//         return true
//       } else if (value < root.value) {
//         return this.search(root.left, value)
//       } else {
//         return this.search(root.right, value)
//       }
//     }
//   }

//   min(root){
//     if(!root.leftt){
//       return root.value
//     }else{
//       return this.min(root.left)
//     }
//   }

//   delete(value) {
//     this.root = this.deleteNode(this.root, value)
//   }

//   deleteNode(root, value) {
//     if (root === null) return root
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value)
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value)
//     } else {
//       if (!root.left && !root.right) {
//         return null
//       }
//       if (!root.left) return root.right
//       if (!root.right) return root.left

//       root.value = this.min(root.right)
//       root.right = this.deleteNode(root.right, root.value)
//     }
//     return root
//   }

//   display(root = this.root) {
//     if (root) {
//       this.display(root.left)
//       console.log(root.value)
//       this.display(root.right)

//     }
//   }
// }
// let BST = new BinarySearchTree()
// BST.insert(4)
// BST.insert(42)
// BST.insert(14)
// BST.insert(44)
// BST.delete(44)
// console.log("search value here is ", BST.search(BST.root, 4122))

// BST.display()


// class Node{
//   constructor(data){
//     this.data = data 
//     this.next =null
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null
//   }

//   insert(data){
//     let newNode = new Node(data)
//     if(!this.head){
//       this.head = newNode
//     }else{
//       let current  = this.head
//       while(current.next){
//         current = current.next
//       }
//       current.next  = newNode 
//     }
//   }

//   update(oldData,newData){

//     let current =this.head
//     while(current){
//       if(current.data === oldData){
//         current.data = newData
//       }
//       current = current.next
//     }
//   }
//   delete(data){
//     if(!this.head)return console.log("List is empty");
    
//     if(this.head === data){
//       this.head = this.head.next
//       return 
//     }
//     console.log("stta");

//     let current = this.head;
//     while(current.next && current.next.data !== data){
//       current=current.next
//     }

//     if(current.next){
//       current.next = current.next.next
//     }else{
//       console.log("data is not found ");
//     }
//   }
//   display(){
//     let current = this.head
//     while(current){
//       console.log(current.data);
//       current = current.next
//     }
//   }
// }

// let LIST = new LinkedList()

// LIST.insert(12)
// LIST.insert(25)
// LIST.insert(32)
// LIST.insert(2)
// LIST.update(2,99) 
// LIST.delete(252)
// LIST.display()



// class TreeNode{
//   constructor(data){
//     this.value = data
//     this.left = null
//     this.right = null
//   }
// }
// class BinarySearchTree{
//   constructor(){
//     this.root = null
//   }
//   isEmpty(){
//     return this.root === null
//   }
//   insert(data){
//     let newNode = new TreeNode(data)
//     if(this.isEmpty()){
//       this.root = newNode
//     }else{
//       this.insertNode(this.root,newNode)
//     }
//   }
//   insertNode(root,newNode){
//     if(newNode.value < root.value){
//       if(root.left === null){
//         root.left = newNode
//       }else{
//         this.insertNode(root.left , newNode)
//       }
//     }else{
//       if(root.right === null){
//         root.right = newNode
//       }else{
//         this.insertNode(root.right,newNode)
//       }
//     }
//   }

//   search(root,value){
//     if(!root){
//       return false
//     }else{
//       if(root.value === value){
//         return true
//       }else if (value < root.value ){
//         return this.search(root.left,value)
//       }else{
//         return this.search(root.right,value)
//       }
//     }
//   }

//   min(root){
//     if(!root.left){
//       return root.value
//     }else{
//       return this.min(root.left)
//     }
//   }

//   delete(value){
//     this.root = this.deleteNode(this.root,value)
//   }
//   deleteNode(root,value){
//     if(root === null) return root
//     if(value < root.value ){
//       root.left =this.deleteNode(root.left.value)
//     }else if(value > root.value){
//       root.right = this.deleteNode(root.right,value)
//     }else{
//       if(!root.left && !root.right) return null
//       if(!root.left) return root.right
//       if(!root.right) return root.left
//       root.value = this.min(root.right)
//       root.right = this.deleteNode(root.right,root.value)
//      } 
//      return root   
//   }
//   display(root=this.root){
//     if(root){
//       console.log(root.value);
//       this.display(root.left)
//       this.display(root.right)
//     }
//   }
// }
// let bst = new BinarySearchTree()
// bst.insert(4)
// bst.insert(44)
// bst.insert(47)
// bst.insert(54)
// bst.delete(44)
// console.log("seacrch value is here ",bst.search(bst.root,534))
// bst.display()



// function quickSort(arr){
//   if(arr.length <= 0){
//     return arr
//   }
//   let pivot = arr[0]
//   let left = []
//   let right = []

//   for(let i=1;i<arr.length;i++){
//     if(arr[i] < pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }

//   return [...quickSort(left),pivot,...quickSort(right)]

// }

// let arr = [4,3,7,8,9,4,2,5,2,1,3,0]
// console.log(quickSort(arr))



// function mergeSort(arr){
//   if(arr.length <= 1){
//     return arr
//   }
//   let mid = Math.floor(arr.length/2)
//   let left = mergeSort(arr.slice(0,mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge(left,right)

// }
// function merge(left,right){
//   let sortArr = []
//   while(left.length && right.length){
//     if(left[0] > right[0]){
//       sortArr.push(left.shift())
//     }else{
//       sortArr.push(right.shift())
//     }
//   }
//   return [...sortArr,...left,...right]
// }
// let arr=[3,45,65,67,3,4,5,6,7,8]
// console.log(mergeSort(arr));


// class Node{
//   constructor(data){
//     this.data = data
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor(){
//     this.head = null
//   }
//   insert(data){
//     let newNode = new Node(data)
//     if(this.head ===null){
//       this.head = newNode
//     }else{
//       let current = this.head
//       while(current.next){
//         current = current.next
//       }
//       current.next = newNode
//     }
//   }
//   update (oldData,newData){
//     let current = this.head
//     while(current){
//       if(current.data === oldData){
//         current.data = newData
//       }
//       current=current.next
//     }
//   }
//   delete(data){
//     if(!this.head) return console.log("list is empty")
//       if(this.head === data){
//         this.head = this.head.next
//         return 
//       }
//       let current = this.head
//       while(current.next && current.next.data !== data){
//         current = current.next
//       }

//       if(current.next){
//         current.next = current.next.next
//       }else{
//         console.log("data is not found ");
//       }
//   }
//   display(){
//     let current = this.head
//     while(current){
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// let list = new LinkedList()

// list.insert(3)
// list.insert(53)
// list.insert(34)
// list.insert(88)
// list.insert(8)
// list.update(34,77)
// list.delete(88)
// list.display()


// class TreeNode{
//   constructor(data){
//     this.value = data
//     this.left = null
//     this.right = null
//   }
// }
// class BinarySearchTree{
//   constructor(){
//     this.root = null
//   }
//   isEmpty(){
//     return this.root === null
//   }
//   insert(data){
//     let newNode = new TreeNode(data)
//     if(this.isEmpty()){
//       this.root = newNode
//     }else{
//       this.insertNode(this.root,newNode)
//     }
//   }
//   insertNode(root,newNode){
//     if(newNode.value < root.value){
//       if(root.left === null){
//         root.left = newNode
//       }else{
//         this.insertNode(root.left,newNode)
//       }
//     }else{
//       if(root.right === null){
//         root.right = newNode
//       }else{
//         this.insertNode(root.right,newNode)
//       }
//     }
//   }

//   search(root,value){
//     if(!root) return false
//     if(root.value === value){
//       return true
//     }else if(value < root.value){
//       return this.search(root.left,value)
//     }else{
//       return this.search(root.right.value)
//     }
    
//   }

//   min(root){
//     if(!root.left){
//       return root.value
//     }else{
//       return this.min(root.left)
//     }
//   }

//   delete(value){
//     this.root = this.deleteNode(this.root,value)
//   }

//   deleteNode(root,value){
//     if(root == null) return root
//     if(value < root.value){
//      root.left =this.deleteNode(root.left,value)
//     }else if (value > root.value){
//       root.right = this.deleteNode(root.right ,value)
//     }else{
//       if(!root.left && !root.right){
//         return null
//       }
//       if(!root.left) return root.right
//       if(!root.right) return root.left

//       root.value = this.min(root.right)
//       root.right = this.deleteNode(root.right,root.value)
//     }
//     return root
    
//   }

//   display(root=this.root){
//     if(root){
//       console.log(root.value);
//       this.display(root.left)
//       this.display(root.right)
//     }
//   }
// }

// let bst = new BinarySearchTree()

// bst.insert(6)
// bst.insert(16)
// bst.insert(63)
// bst.insert(69)
// bst.delete(69)
// bst.display()


// function quickSort(arr){
//   if(arr.length <=0){
//     return arr
//   }
//   let pivot = arr[0]
//   let left = []
//   let right = []
//   for(let i=1;i<arr.length;i++){
//     if(arr[i] < pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [4,56,8,9,34,3,1]

// console.log(quickSort(arr));


// function mergeSort(arr){
//   if(arr.length <=1){
//     return arr
//   }
//   let mid = Math.floor(arr.length/2)
//   let left = mergeSort(arr.slice(0,mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge(left,right)
// }

// function merge(left,right){
//   let sortArr = []
//   while(left.length && right.length){
//     if(left[0]< right[0]){
//       sortArr.push(left.shift())
//     }else{
//       sortArr.push(right.shift())
//     }
//   }
//   return [...sortArr,...left,...right]
// }
// let arr = [7,5,6,7,8,9,4,3,5,2]
// console.log(mergeSort(arr));


// class Graph {
//   constructor() {
//     this.adjacencyList = new Map();
//   }

//   addVertex(vertex) {
//     if (!this.adjacencyList.has(vertex)) {
//       this.adjacencyList.set(vertex, []);
//     } else {
//       console.log("Vertex already exists in the graph.");
//     }
//   }

//   addEdge(vertex1, vertex2) {
//     if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
//       console.log("One or more vertices do not exist in the graph.");
//     } else {
      
//       this.adjacencyList.get(vertex1).push(vertex2);
   
//       this.adjacencyList.get(vertex2).push(vertex1);
//     }
//   }

//   printGraph() {
//     for (let [vertex, edges] of this.adjacencyList) {
//       console.log(`${vertex} -> ${edges.join(',')}`);
//     }
//   }

// }


// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('M');
// graph.addVertex('N');

// // Add edges
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('M','N');
// graph.addEdge('N','M');

// // Print the graph

// graph.printGraph();



// class Graph{
//   constructor(){
//     this.adjList = new Map()
//   }
//   addVertex(vertex){
//     if(!this.adjList.has(vertex)){
//       this.adjList.set(vertex,[])
//     }else{
//       console.log("vertext already there ")
//     }
//   }

//   addEdge(vertex1,vertex2){
//     if(!this.adjList.has(vertex1)||!this.adjList.has(vertex2)){
//       console.log("no---jknhj");
//     }else{
//       this.adjList.get(vertex1).push(vertex2)
//       this.adjList.get(vertex2).push(vertex1)
//     }
//   }

//   printGraph(){
//     for(let [vertex,edge] of this.adjList){
//       console.log(`${vertex}->${edge}`);
//     }
//   }
// }


// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('M');
// graph.addVertex('N');

// // Add edges
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('M','N');
// graph.addEdge('N','M');

// // Print the graph

// graph.printGraph();

// function swap(heap, index1, index2) {
//   [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
// }

// function heapifyDown(heap, index, heapSize) {
//   const leftChildIndex = 2 * index + 1;
//   const rightChildIndex = 2 * index + 2;
//   let smallerChildIndex = index;

//   if (leftChildIndex < heapSize && heap[leftChildIndex].id < heap[smallerChildIndex].id) {
//       smallerChildIndex = leftChildIndex;
//   }

//   if (rightChildIndex < heapSize && heap[rightChildIndex].id < heap[smallerChildIndex].id) {
//       smallerChildIndex = rightChildIndex;
//   }

//   if (smallerChildIndex !== index) {
//       swap(heap, index, smallerChildIndex);
//       heapifyDown(heap, smallerChildIndex, heapSize);
//   }
// }

// function minHeap(array) {
//   for (let i = Math.floor(array.length / 2); i >= 0; i--) {
//       heapifyDown(array, i, array.length);
//   }
//   return array;
// }

// function heapSort(array) {
//   minHeap(array);

//   for (let i = array.length - 1; i > 0; i--) {
//       swap(array, 0, i);
//       heapifyDown(array, 0, i);
//   }
  
//   return array;
// }

// // Example usage:
// const items = [
//   { id: 10 },
//   { id: 3 },
//   { id: 8 },
//   { id: 1 },
//   { id: 7 }
// ];
// const sortedArray = heapSort(items);
// console.log(sortedArray); // Output: [1, 2, 3, 4]



// function swap(heap,index1,index2){
//   [heap[index1],heap[index2]] = [heap[index2],heap[index1]]
// }
// function heapifyDown(heap, index,heapSize){
//   const left = 2*index+1
//   const right = 2*index+2
//   let small = index

//   if(left < heapSize && heap[left] < heap[small]){
//     small =left
//   }
//   if(right < heapSize && heap[right] < heap[small]){
//     small =right
//   }
//   if(small !== index){
//     swap(heap,index,small)
//     heapifyDown(heap,small,heapSize)
//   }
// }
// function minHeap(array){
//   for(let i=Math.floor(array.length/2);i>=0;i--){
//     heapifyDown(array,i,array.length)
//   }

//   return array
// }
// function heapSort(array){
//   minHeap(array)
//   for(let i=array.length-1;i>=0;i--){
//     swap(array,0,i)
//     heapifyDown(array,0,i)

//   }
//   return array
// }

// const array = [5,3,5,3,9,90,4,12,38,87]
// console.log(heapSort(array))



// class Node{
//   constructor(data){
//     this.data = data
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head=null
//   }
//   insert(data){
//     let newNode = new Node(data)
//     if(this.head === null){
//       this.head = newNode
//     }else{
//       let current = this.head
//       while(current.next){
//         current = current.next
//       }
//       current.next = newNode
//     }
//   }

//     update(oldData,newData){
//       let current = this.head
//       while(current){
//         if(current.data === oldData){
//           current.data = newData
//         }
//         current = current.next
//       }
//     }

//     delete(data){
//       if(!this.head) return console.log("list is empty");

//       if(this.head.data === data){
//         this.head = this.head.next
//         return
//       }
//       let current = this.head
//       while(current.next && current.next.data !==data){
//         current = current.next
//       }
//       if(current.next){
//         current.next = current.next.next
//       }else{
//         console.log("not found");
//       }
//     }

//     display(){
//       let current = this.head
//       while(current){
//         console.log(current.data);
//         current = current.next
//       }
//     }
  
// }

// let list = new LinkedList()
// list.insert(7)
// list.insert(72)
// list.insert(17)
// list.insert(98)

// list.update(72,88)
// list.delete(7)

// list.display()


// class TreeNode{
//   constructor(data){
//     this.value = data
//     this.left = null
//     this.right = null
//   }
// }

// class BinarySearchTree{
//   constructor(){
//     this.root= null
//   }
//   isEmpty(){
//     return this.root === null
//   }
//   insert(data){
//     let newNode = new TreeNode(data)
//     if(this.isEmpty()){
//       this.root = newNode
//     }else{
//       this.insertNode(this.root,newNode)
//     }
//   }
//   insertNode(root,newNode){
//     if(newNode.value < root.value){
//       if(root.left === null){
//         root.left = newNode
//       }else{
//         this.insertNode(root.left,newNode)
//       }
//     }else{
//       if(root.right === null){
//         root.right = newNode
//       }else{
//         this.insertNode(root.right,newNode)
//       }
//     }
//   }

//   search(root,value){
//     if(!root){
//       return false
//     }else{
//       if(root.value === value){
//         return true
//       }else if(value < root.value){
//         return this.search(root.left,value)
//       }else{
//         return this.search(root.right,value)
//       }
//     }
//   }

//   delete(value){
//     this.root = this.deleteNode(this.root,value)
//   }
//   deleteNode(root,value){
//     if(root === null){
//       return root
//     }
//     if(value < root.value ){
//       root.left = this.deleteNode(root.left,value)
//     }else if (value > root.value){
//       root.right = this.deleteNode(root.right,value)
//     }else{
//       if(!root.left && !root.right) return null
//       if(!root.left) return root.right;
//       if(!root.right) return root.left;

//       root.value = this.min(root.right)
//       root.right = this.deleteNode(root.value,root.value)
//     }
//     return root
//   }

//   display(root = this.root){
//     if(root){
//       console.log(root.value);
//       this.display(root.left)
//       this.display(root.right)
//     }
//   }
// }

// let bst  = new BinarySearchTree()
// bst.insert(8)
// bst.insert(18)
// bst.insert(82)
// bst.insert(83)
// console.log("search value is ",bst.search(bst.root,893));
// bst.delete(8)
// bst.display()


// function quickSort(arr){
//   if(arr.length <=0){
//     return arr
//   }
//   let pivot = arr[0]
//   let left = []
//   let right = []
//   for(let i=1;i<arr.length;i++){
//     if(arr[i] > pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [3,4,5,76,788,3,5,6,8]
// console.log(quickSort(arr));


// function mergeSort(arr){
//   if(arr.length <= 1){
//     return arr
//   }
//   let mid = Math.floor(arr.length/2)
//   let left = mergeSort(arr.slice(0,mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge(left,right)
// }

// function merge(left,right){
//   let sortArr = []
//   while(left.length && right.length){
//     if(left[0] < right[0]){
//       sortArr.push(left.shift())
//     }else{
//       sortArr.push(right.shift())
//     }
//   }
//   return [...sortArr,...left,...right]
// }

// let arr = [4,5,6,34,5,67,788,34,312,1]
// console.log(mergeSort(arr));

// class Graph {
//   constructor(){
//     this.adjList = new Map()
//   }
//   addVertex(vertex){
//     if(!this.adjList.has(vertex)){
//       this.adjList.set(vertex,[])
//     }else{
//       console.log("vertext is alreadsy in ");
//     }
//   }
//   addEdge(vertex1,vertex2){
//     if(!this.adjList.has(vertex1) || !this.adjList.has(vertex2)){
//       console.log("data is kjkjhkj");
//     }else{
//       this.adjList.get(vertex1).push(vertex2)
//       this.adjList.get(vertex2).push(vertex1)
//     }
//   }
//   print(){
//     for( let [vertex ,edge] of this.adjList){
//       console.log(`${vertex} ->${edge} `);
//     }
//   }
// }

// let graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdge("A","B")
// graph.addEdge("b","c")
// graph.addEdge("A","C")

// graph.print()


// function swap(heap,index1,index2){
//   [heap[index1],heap[index2]] = [heap[index2],heap[index1]]
// }
// function heapifyDown(heap,index,heapSize){
//   const left = 2*index+1
//   const right = 2*index+2
//   let small = index

//   if(left < heapSize && heap[left] < heap[small]){
//     small = left
//   }
//   if(right < heapSize && heap[right] < heap[small]){
//     small = right
//   }

//   if(small !== index){
//     swap(heap,index,small)
//     heapifyDown(heap,small,heapSize)
//   }
// }
// function minHeap(arr){
//   for(i=Math.floor(arr.length/2);i>=0;i--){
//     heapifyDown(arr, i , arr.length)
//   }
//   return arr
// }

// function heapSort(arr){
//   minHeap(arr)
//   for(let i=arr.length-1;i>=0;i--){
//     swap(arr,0,i)
//     heapifyDown(arr,0,i)
//   }
//   return arr
// }

// const arr = [3,4,5,6,788,989,1,2,7,88]
// console.log(heapSort(arr));


// class TrieNode{
//   constructor(){
//     this.children = {}
//     this.isEndOfWord = false
//   }
// }
// class Trie{
//   constructor(){
//     this.root = new TrieNode()
//   }

//   insert(word){
//     let node  = this.root
//     for(let char of word){
//       if(!node.children[char]){
//         node.children[char] = new TrieNode()
//       }
//       node= node.children[char]
//     }
//     node.isEndOfWord= true
//   }

//   search(word){
//     let node = this.root
//     for(let char of word){
//       if(!node.children[char]){
//         return false
//       }
//       node = node.children[char]
//     }
//     return node.isEndOfWord
//   }
// }

// let trie = new Trie()

// trie.insert("aadil")

// console.log("seacrh value is ",trie.search("aail"));


class TreeNode {
  constructor(data){
    this.value = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  isEmpty(){
    return this.root === null
  }
  insert(data){
    let newNode = new TreeNode(data)
    if(this.isEmpty()){
      this.root = newNode
    }else{
      this.insertNode(this.root,newNode)
    }
  }
  insertNode(root,newNode){
    if(newNode.vlaue < root.value){
      if(root.left === null){
        root.left = newNode
      }else{
        this.insertNode(root.left,newNode)
      }
    }else{
      if(root.right === null){
        root.right = newNode
      }else{
        this.insertNode(root.right,newNode)
      }
    }
  }

  search (root,value){
    if(!root){
      return false
    }else{
      if(root.value === value ){
        return true
      }else if(value < root.value){
       return  this.search(root.left,newNode)
      }else{
        return this.search(root.right,newNode)
      }
    }
  
  }
    preOrder(root=this.root){
      if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }
  


}

const bst = new BinarySearchTree()
bst.insert(7)
bst.insert(71)
bst.insert(741)
bst.insert(17)
bst.preOrder()
