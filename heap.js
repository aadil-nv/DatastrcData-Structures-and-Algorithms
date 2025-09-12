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


// const items = [
//     { id: 10 },
//     { id: 3 },
//     { id: 8 },
//     { id: 1 },
//     { id: 7 }
// ];

// let items = [
//     {person:"Almas",salary:200000},
//     {person:"adhil",salary:300000},
//     {person:"naseef",salary:500000},
//     {person:"idk",salary:600000},
// ]
const items = [34,5,32,234,5,2,2,1]
const sortedArray = heapSort(items);
console.log(sortedArray); // Output: [1, 2, 3, 4]

