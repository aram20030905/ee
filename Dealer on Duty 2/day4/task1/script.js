function growArray(array){
    for (let i=0;i<array.length-1;i++){
        if(!(array[i]<array[i+1])){
            return false;
        }
    }
    return true;
    
}
let a=[2,3,4,5]
console.log(growArray(a))