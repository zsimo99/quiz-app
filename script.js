document.addEventListener("DOMContentLoaded", () => {
    const startDisplay = document.querySelector(".start")
    const questionsDisplay = document.querySelector(".qustion")
    const resultDisplay = document.querySelector(".result")
    const startBtn = document.querySelector("#start-btn")
    const nextBtn = document.querySelector("#next-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const answerList = document.querySelector(".answers")

    const questions = [
        {
            question: "What is the capital of France?",
            answers: ["Paris", "London", "Rome", "Madrid"],
            correct: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: "Pacific Ocean"
        }
    ];
    let counter = 0;
    let userAnswers = []
    let selectedAnswer


    startBtn.addEventListener("click", () => {
        counter = 0
        showQuestion()
        startDisplay.classList.add("hidden")
        questionsDisplay.classList.remove("hidden")
    })
    nextBtn.addEventListener("click", () => {
        userAnswers.push(selectedAnswer)
        counter++
        if (counter === questions.length) return showResult()
        showQuestion()
    })
    restartBtn.addEventListener("click", () => {
        userAnswers = []
        counter = 0
        showQuestion()
        resultDisplay.classList.add("hidden")
        questionsDisplay.classList.remove("hidden")
    })
    function showQuestion() {
        answerList.innerHTML = ""
        questions[counter].answers.forEach(answer => {
            const li = document.createElement("li")
            li.textContent = answer
            li.addEventListener("click", () => {
                selectedAnswer = answer
                Array.from(li.parentElement.children).forEach(e => e.classList.remove("selected"))
                if (!li.classList.contains("selected")) li.classList.add("selected")
                if (nextBtn.classList.contains("hidden")) nextBtn.classList.remove("hidden")
            })
            answerList.appendChild(li)
        });
    }
    function showResult() {
        let correctAnswer = 0
        userAnswers.forEach((answer,i)=>answer===questions[i].correct?correctAnswer++:correctAnswer)
        resultDisplay.querySelector("p").innerText = `you answer ${correctAnswer} of ${questions.length}`
        questionsDisplay.classList.add("hidden")
        resultDisplay.classList.remove("hidden")
    }
})