function verifica(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    let result = true

    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            console.log(string1[i], string2[j]);
            if (string1[i] == string2[j]) {
                result = true
                break;
            } else result = false
        }
    }
    if (!result ) {
        return result
    }

    for (let i = 0; i < string2.length; i++) {
        for (let j = 0; j < string1.length; j++) {
            if (string2[i] == string1[j]) {
                result = true
                break;
            } else result = false
        }
    }

    return result;
}
console.log(verifica('aLOHg', 'AhOL'));


