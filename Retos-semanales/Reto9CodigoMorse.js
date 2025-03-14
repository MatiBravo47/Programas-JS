/*
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de 
 * transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se 
 * trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", 
 * un espacio " " entre letras o símbolos y 
 * dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado 
 * en https://es.wikipedia.org/wiki/Código_morse.
 *
 */

function decodeMorse(morseCode) {
    var ref = { 
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

    return morseCode
    .split('   ')
    .map(
        a => a
        .split(' ')
        .map(
        b => ref[b]
        ).join('')
    ).join(' ');
}

var decoded = decodeMorse(".-- --- .-. -..   .-- --- .-. -..");
console.log(decoded);