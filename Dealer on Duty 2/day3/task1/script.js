function firstNonRepeatingCharacter(s) {

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return char;
        }
    }
    
    return null;
}


console.log(firstNonRepeatingCharacter("swiss")); 
console.log(firstNonRepeatingCharacter("aabbcc")); 
