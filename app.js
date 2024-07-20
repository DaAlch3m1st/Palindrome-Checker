// first I'm gonna do the project on the console (search how to reverse words)

function reverseString(str) {
    return str.split('').reverse().join('');
}
const reversed = reverseString("ana");
console.log(reversed);