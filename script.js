    let secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log("secretNumber:" + secretNumber);
    let attempts = 0;

    document.getElementById('submit-button').addEventListener('click', checkGuess);

    function checkGuess() {
        let userGuess = parseInt(document.getElementById('guess-input').value);


        if (isNaN(userGuess)) {
            document.getElementById('result-text').textContent = 'Invalid input!';
            return;
        }

        if (userGuess < 1 || userGuess > 100) {
            document.getElementById('result-text').textContent = 'Please enter a number between 1 and 100!';
            return;
        }
        attempts++;

        if (userGuess < secretNumber) {

            document.getElementById('result-text').textContent = 'Too Low! Try again.';

        } else if (userGuess < secretNumber) {

            document.getElementById('result-text').textContent = 'Too High! Try again.';

        } else {

            document.getElementById('result-text').textContent = 'Congratulations! You won';

        }
    }