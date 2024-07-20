const checkBtn = document.getElementById('check-btn');

function palindromeChecker() {
    // get the input value of the game
    const inputText = document.getElementById('text-input').value
    // Check if the value is palindrome doing with this code
    const reverseInput = inputText.split('').reverse().join('').toLowerCase().replace(/[^a-z0-9]/g, '');

    // get the element "p" to display the text if the number is palindrome or not
    const result = document.getElementById('result');
    // operator logic "if" the word is the same in reverse or not
    if (inputText.trim() === '') {
        result.innerHTML = 'Input is empty. Please enter something.'
        console.log('Input is empty. Please enter something.');
        // operator logic "elif if" to check if the word is palindrome 
    } else if (reverseInput === inputText.toLowerCase().replace(/[^a-z0-9]/g, '')) {
        result.innerHTML = `${inputText} is a palindrome`;
        console.log(`${inputText} is palindrome`);
    } else {
        result.innerHTML = `${inputText} is not a palindrome`
        console.log(`${inputText} isn't palindrome`);
    }
}

checkBtn.addEventListener('click', function() {
    palindromeChecker();
})