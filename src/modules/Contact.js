const textAreaEl = document.querySelector('.contact-form-message');
const charCounter = document.querySelector('#current');


const countChars = () => {
    let charsTyped = textAreaEl.value;
    charCounter.innerHTML = charsTyped.length;
    if (charsTyped.length >= 500) {
        charsTyped.splice(500)
    }
}

textAreaEl.addEventListener('keyup', countChars);