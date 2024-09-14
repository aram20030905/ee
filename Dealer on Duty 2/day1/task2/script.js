function reverseWord(str) {
    let s = str.split("")

    let p = s.reverse()
    let reversedWord = p.join("")
    return reversedWord;




}
let a = "Barev Hayastan";
console.log(reverseWord(a))