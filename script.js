const input = document.querySelector('input');
const form = document.querySelector('form');
const result = document.querySelector('#result');

function cleanInput(str) {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, '');
}

function palindromeChecker(e) {
  e.preventDefault();

  if (input.value === '') {
    alert('Please input a value');
    result.innerHTML = '';
    return;
  }

  let text = input.value;
  const cleanText = cleanInput(text);

  input.value = '';

  const reversedText = cleanText.split('').reverse().join('').toLowerCase();

  result.innerHTML = `<span class="palindrome-text">${text}</span> ${
    cleanText.toLowerCase() === reversedText ? 'is' : 'is not'
  } a  palindrome.`;
}

form.addEventListener('submit', palindromeChecker);
