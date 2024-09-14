function changeArray(array){
    let firstIndex=array[0];
    let lastIndex=array[array.length-1]
    let temp=firstIndex;
    firstIndex=lastIndex;
    lastIndex=temp
return array
    
}
let a=[8,9,2,4,9]
console.log(changeArray(a))