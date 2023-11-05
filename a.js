//Solve (Practise)

function Multiply(fu1 , fu2) {
    const multi = fu1 * fu2;
    return multi;

    
}

const resultm = Multiply(9 , 8);
console.log(resultm);
if (resultm < 100 ) {
    console.log('True');
}
else {
    console.log('False');
}


//Classworks

const numbers = [23, 34, 54, 5, 68, 76, 73]
function smallestNumber(arrayData) {
    let min = arrayData[0]
    for (i=0; i<arrayData.length; i++) {
        const element = arrayData[i];
        if (element < min) {
            min = element;
        }
    }
    return min
}

const result = smallestNumber (numbers);
console.log(result);





const players = ['neymar', 'messi', 'ronaldo', 'sala', 'sadio', 'neymar', 'messi', 'ronaldo', 'neymar'];

function removeDuplicate(names) {
    let unique = [];
    for (i = 0; i < names.length; i++) {
        const element = names[i]
        if (unique.indexOf(element) == -1){
            unique.push(element)
        }
    }
    return unique
}

const output = removeDuplicate(players);
console.log(output);



const letters = 'How are you?';

function reverseletter(text){
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        reverse = letter + reverse
    }
    return reverse
}

const result3 = reverseletter(letters);
console.log(result3);





function addTwoNumber(one,two) {
    const total1 = one + two;
    return total1
}

const resulti = addTwoNumber(12+14 , 1);
console.log(resulti);





for (i=1; i<= 50; i++) {
    if (i % 3 == 0 && i %5 == 0) {
        console.log('foobar');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}