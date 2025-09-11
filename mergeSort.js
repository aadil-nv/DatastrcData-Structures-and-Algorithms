function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left= mergeSort(arr.slice(0,mid))
    let right= mergeSort(arr.slice(mid))
    return merge(left,right)
}

function merge(left,right){
    let sortArr= []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortArr.push(left.shift())
        }else{
            sortArr.push(right.shift())
        }
    }
    return [...sortArr,...left,...right]
}

let arr=[5,8,1,2,4,9,3,6,7]
console.log(mergeSort(arr));