// class Heap {
//     constructor() {
//         this.heap = [];
//     }


//     swap(index1, index2) {
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//     }


//     heapifyDown(index) {
//         const leftChildIndex = 2 * index + 1;
//         const rightChildIndex = 2 * index + 2;
//         let smallerChildIndex = index;

//         if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallerChildIndex]) {
//             smallerChildIndex = leftChildIndex;
//         }

//         if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
//             smallerChildIndex = rightChildIndex;
//         }

//         if (smallerChildIndex !== index) {
//             this.swap(index, smallerChildIndex);
//             this.heapifyDown(smallerChildIndex);
//         }
//     }


//     buildHeap(array) {
//         this.heap = array;
//         for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//             this.heapifyDown(i);
//         }
//     }


//     heapSort() {
//         const sortedArray = [];
//         while (this.heap.length > 0) {
//             sortedArray.push(this.poll());
//         }
//         return sortedArray;
//     }


//     poll() {
//         if (this.heap.length === 0) {
//             throw new Error("Heap is empty");
//         }
//         const item = this.heap[0];
//         this.heap[0] = this.heap[this.heap.length - 1];
//         this.heap.pop();
//         this.heapifyDown(0);
//         return item;
//     }
// }


// const heap = new Heap();
// heap.buildHeap([10, 5, 25,3,30,22,12]);
// console.log(heap.heapSort()); 




// function swap(heap, index1, index2) {
//     [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
// }

// function heapifyDown(heap, index, heapSize) {
//     const leftChildIndex = 2 * index + 1;
//     const rightChildIndex = 2 * index + 2;
//     let largerChildIndex = index;

//     if (leftChildIndex < heapSize && heap[leftChildIndex] < heap[largerChildIndex]) {
//         largerChildIndex = leftChildIndex;
//     }

//     if (rightChildIndex < heapSize && heap[rightChildIndex] < heap[largerChildIndex]) {
//         largerChildIndex = rightChildIndex;
//     }

//     if (largerChildIndex !== index) {
//         swap(heap, index, largerChildIndex);
//         heapifyDown(heap, largerChildIndex, heapSize);
//     }
// }

// function minHeap(array) {
//     for (let i = Math.floor(array.length / 2); i >= 0; i--) {
//         heapifyDown(array, i, array.length);
//     }
//     return array;
// }

// function heapSort(array) {
//     minHeap(array);

//     for (let i = array.length - 1; i > 0; i--) {
//         heapifyDown(array, 0, i);
//         swap(array, 0, i);
//     }

//     return array;
// }

// Example usage:
// const array = [ 3,8,1,77,0,5,32];
// console.log(minHeap(array.slice()));

// function swap(heap, index1, index2) {
//     [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
// }

// function heapifyDown(heap, index, heapSize) {
//     const leftChildIndex = 2 * index + 1;
//     const rightChildIndex = 2 * index + 2;
//     let smallerChildIndex = index;

//     if (leftChildIndex < heapSize && heap[leftChildIndex].id < heap[smallerChildIndex].id) {
//         smallerChildIndex = leftChildIndex;
//     }

//     if (rightChildIndex < heapSize && heap[rightChildIndex].id < heap[smallerChildIndex].id) {
//         smallerChildIndex = rightChildIndex;
//     }

//     if (smallerChildIndex !== index) {
//         swap(heap, index, smallerChildIndex);
//         heapifyDown(heap, smallerChildIndex, heapSize);
//     }
// }

// function minHeap(array) {
//     for (let i = Math.floor(array.length / 2); i >= 0; i--) {
//         heapifyDown(array, i, array.length);
//     }
//     return array;
// }

// function heapSort(array) {
//     minHeap(array);

//     for (let i = array.length - 1; i > 0; i--) {
//         swap(array, 0, i);
//         heapifyDown(array, 0, i);
//     }

//     return array;
// }

// // Example usage:
// const array = [1,2,3,45,8];
// const sortedArray = heapSort(array);
// console.log(sortedArray); // Output: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]

function swap(heap, index1, index2) {
    [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
}

function heapifyDown(heap, index, heapSize) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallerChildIndex = index;

    if (leftChildIndex < heapSize && heap[leftChildIndex] < heap[smallerChildIndex]) {
        smallerChildIndex = leftChildIndex;
    }

    if (rightChildIndex < heapSize && heap[rightChildIndex] < heap[smallerChildIndex]) {
        smallerChildIndex = rightChildIndex;
    }

    if (smallerChildIndex !== index) {
        swap(heap, index, smallerChildIndex);
        heapifyDown(heap, smallerChildIndex, heapSize);
    }
}

function minHeap(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapifyDown(array, i, array.length);
    }
    return array;
}

function heapSort(array) {
    minHeap(array);

    for (let i = array.length - 1; i >= 0; i--) {
        swap(array, 0, i);
        heapifyDown(array, 0, i);
    }
    
    return array;
}

// Example usage:
const items = [
    { id: 10 },
    { id: 3 },
    { id: 8 },
    { id: 1 },
    { id: 7 }
];
const sortedArray = heapSort(items);
console.log(sortedArray); // Output: [1, 2, 3, 4]
