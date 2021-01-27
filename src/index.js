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
    // write your solution here
    const arr = [];
    let str = "";  
    for (let i = 0; i < expr.length; i = i + 10) {
        arr.push(expr.substr(i, 10));
    }
    console.log(arr);

    
    let arrAfterMap = arr.map(element => {
        for (let i = 0; i < element.length; i++) {
            if (element[i] == 1) {
               return element.substr(i);
            }else if(element[i] == "*"){
                return element
            }

        }
       
    });
    console.log(arrAfterMap);



    let d = arrAfterMap.map(element => {
        for (let i = 0; i < element.length; i = i + 2) {
            if (!element.includes("*")) {
                str = element.substr(i, 2);
                if (str == "10") {
                    element += ".";
                } else if (str == "11") {
                    element += "-";
                }
            } else {
                element = " ";
                continue;
            }

        }
        return element.replace(/\d/g, "");

    });

    //console.log(d);    
    let dd = d.map(el=>{
        for(let key in MORSE_TABLE){
            if(el == key){
                el = MORSE_TABLE[key];
               // console.log(el);
            }
        }
      return el;
        
    });
    // console.log(dd);
    // console.log(dd.join("").replace(/,/g, ""));
    return dd.join("").replace(/,/g, "");
    
}

module.exports = {
    decode
};