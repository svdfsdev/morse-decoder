const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let regexpChar = /........../g;
    let regexp00 = /00/g;
    let regexp10 = /10/g;
    let regexp11 = /11/g;
    let regexpSpace = /\*........./g;

    let arr = expr.match(regexpChar);

    for (let i = 0; i < arr.length; i++) {
        
        arr[i] = arr[i].replace(regexp00, "")
                       .replace(regexp10, ".")
                       .replace(regexp11, "-")
                       .replace(regexpSpace, " ");
        
        arr[i] = ( MORSE_TABLE.hasOwnProperty(arr[i]) ) ? MORSE_TABLE[arr[i]] : " ";
            
    }

    return arr.join("");
}

module.exports = {
    decode
}