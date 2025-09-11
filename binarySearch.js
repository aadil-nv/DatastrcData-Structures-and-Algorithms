function binarySearch(arr,target){
    let left=0
    let right=arr.length-1
    
    while(left <=right){
        let middilIndex=Math.floor((left+right)/2)
        if(target===arr[middilIndex]){
            return middilIndex
        }
        if(target< arr[middilIndex]){
            right= middilIndex-1
        }else{
            left= middilIndex+1
        }
    }
    return -1
}

let arr=[1,2,3,4,5,6,7]
let target=7
console.log(binarySearch(arr,target))