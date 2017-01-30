(function () {
    'use strict';

    const game = {
        points: 0,
        count: 0,
        questions: {},
        current: {},
    };

    function initGame() {

        const endpoint = 'dict-a.json';

        fetch(endpoint)
            .then(data => data.json())
            .then(data => {
                game.questions = data;
                newGame();
            });
    }

    // Start a new game
    function newGame() {

        game.count++;
        game.points = 0;

        answers.innerHTML = "";

        updateStats();
        nextQuestion();

    }

    function displayQuestion(q) {

        answerInput.value = '';
        answerInput.focus();

        definitionDesc.innerHTML = q.description;
        hintDesc.innerHTML = q.phrase;
    }

    // Select random questions from the questions object
    function nextQuestion() {

        let count = 0,
            result = null;

        for (let phrase in game.questions) {
            if (Math.random() < 1 / ++count) {
                result = phrase;
            }
        }

        game.current = {
            phrase: result,
            description: game.questions[result]
        };

        displayQuestion(game.current);
    }

    function updateStats() {
        ctrlPoints.innerHTML = game.points;
    }

    function logAnswer(result, q) {

        if (result) {
            game.points++;
        }

        const li = document.createElement("li");
        li.classList.add(result ? "good" : "bad");
        li.appendChild(document.createTextNode(`${q.phrase}: ${q.description}`));
        answers.insertBefore(li, answers.childNodes[0]);

        updateStats();
    }

    function skipQuestion() {

        logAnswer(false, game.current);
        nextQuestion();
    }

    function checkAnswer() {

        if (answerInput.value.toLowerCase() === game.current.phrase.toLowerCase()) {
            logAnswer(true, game.current);
            nextQuestion();
        }
    }

    // Assign controls to js consts
    const answerInput = document.querySelector('.answer');
    const definitionDesc = document.querySelector('.definition');
    const hintDesc = document.querySelector('.hint');
    const answers = document.querySelector('.answers');
    const ctrlPoints = document.querySelector('.points');

    // Bind actions to controls
    document.querySelector('.control-newgame').onclick = function () {
        newGame();
        return false;
    };

    document.querySelector('.answer-form').onsubmit = function () {
        return false;
    };

    document.querySelector('.skip').onclick = function () {
        skipQuestion();
        return false;
    };

    answerInput.addEventListener('keyup', checkAnswer);

    initGame();

})();
