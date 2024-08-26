function revealLetter() {
    const guard = document.querySelector('.guard');
    const letter = document.getElementById('letterContent');
    const guardText = document.getElementById('guardText');

    // Move the guard up and change the text
    guard.classList.add('move-up');
    guardText.textContent = "I am the Royal Guard of eASY!";

    // Show the letter with a bounce effect
    setTimeout(() => {
        letter.classList.toggle('show');
    }, 1000); // Delay to ensure the guard has moved up before the letter appears
}
