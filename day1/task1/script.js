function vovel(str){
    let a=str.split("")
    let count=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==='a' || a[i]==='a' || a[i]==='i'|| a[i]==='o' || a[i]==='u'){
            count++
        }
     
    }
    return count;

}

let a="barev Hayastan";
console.log(vovel(a))