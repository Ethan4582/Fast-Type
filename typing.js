// Splitting the string at spaces
const words = 'Lack of Sustained Motivation: Inconsistent drive hinders entrepreneurial pursuits.'.split(' ');
const wordCount = words.length;

function randomWord() {
    const randomIndex = Math.floor(Math.random() * wordCount); // Adjusted to use Math.floor() instead of Math.ceil()
    return words[randomIndex];
}

// Function to format the word 
function formatWord(word) {
    return `<div class="word">
    <span class="letter">
    ${word.split(' ').join('</span><span class="letter">')}
    </span>
    </div>`; // Fixed the format of the string
}

// Defining a function to clear the inner HTML of an element with id 'words' and generate new words
function newGame() {
    const wordsElement = document.getElementById('words');
    wordsElement.innerHTML = '';
    for (let i = 0; i < 200; i++) {
        wordsElement.innerHTML += formatWord(randomWord());
    }
}

// Calling the newGame() function to generate new words
newGame();
