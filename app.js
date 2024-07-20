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
        alert("Please input a value")
        console.log('Input is empty. Please enter something.');
        // operator logic "elif if" to check if the word is palindrome 
    } else if (reverseInput === inputText.toLowerCase().replace(/[^a-z0-9]/g, '')) {
        result.innerHTML = `<p><strong>${inputText}</strong> is a palindrome</p>`;
        console.log(`${inputText} is palindrome`);
    } else {
        result.innerHTML = `<p><strong>${inputText}</strong> is not a palindrome</p>`;
        console.log(`${inputText} isn't palindrome`);
    }
}

checkBtn.addEventListener('click', function() {
    palindromeChecker();
})