// Write a function to return the mean, median and largest number for the series

const mean = (arr)=>{
    var count=0;
    for(let i=0;i<arr.length;i++){
        count= count+arr[i]/arr.length
    }
    return count;
}

var final = mean([1,2,3])
console.log(final)

const mode = (arr)=>{
    var max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}

const median = (arr)=>{
    const arrSorted = arr.sort((a,b)=>a-b);
    return arrSorted.length%2===0 ? (arrSorted[arrSorted.length/2-1]+ arrSorted[arrSorted.length/2])/2 : arrSorted[Math.floor(arrSorted.length/2)];
}
var m = median([8,1,6,2,6,4,2, 0,7])
console.log(m)