function quickSort (arr){
    if(arr.length <= 0 ){
        return arr
    }
    let pivot=arr[0]
    const left=[]
    const right=[]

    for(let i=1;i<arr.length;i++){ //n

        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr=[6,1,82,0,3,4,6,4,29]
console.log(quickSort(arr));