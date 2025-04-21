const DIGITS = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
const OPERATORS = new Set(['+', '-', '*', '/'])
var calculate = function (s) {

    const pieces = [];
    let num = ''

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (DIGITS.has(char)) {
            num += char;
        } else if (OPERATORS.has(char)) {
            if (num) {
                pieces.push(parseInt(num))
                num = '';
            }

            pieces.push(char);
        }
    }


    pieces.push(parseInt(num))

    // console.log('pieces: ', pieces)

    let length = pieces.length;

    for (let i = 0; i < length; i++) {
        const char = pieces[i];
        // console.log(i, char, 'i, char')
        if (['/', '*'].includes(char)) {
            const left = pieces[i - 1];
            const right = pieces[i + 1];
            const result = char === "/" ? Math.floor(left / right) : left * right;
            // console.log('merge: ', result, char, left, right, i)
            pieces.splice(i - 1, 3, result)
            length = pieces.length;
            // console.log(pieces)
            --i;
        }
    }

    // console.log('pieces: ', pieces)

    for (let i = 0; i < length; i++) {
        const char = pieces[i];
        if (['-', '+'].includes(char)) {
            const left = pieces[i - 1];
            const right = pieces[i + 1];
            const result = char === "-" ? left - right : left + right;
            pieces.splice(i - 1, 3, result)
            length = pieces.length;
            --i;
        }
    }

    // console.log('pieces: ', pieces)


    return pieces[0]
};

