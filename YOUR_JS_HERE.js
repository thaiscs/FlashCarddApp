// Write your javascript here
const data = [{"question": "What do you want to know today?",
                "answer": "If it`s going to rain in the afternoon."}, 
              {"question": "What do you wish happened today?",
              "answer": "Good things."}, 
              {"question": "What would you like to hear today?", 
              "answer": "More good news."},
            ]

function pickRandomNumber(max) {
    max = data.length
    return Math.floor(Math.random() * Math.floor(max))
}

index = pickRandomNumber()

function pickRandomQuestion() {
    return data[index]
}

randomQuestion = pickRandomQuestion()

title = document.getElementById('title')
title.innerHTML = `
    <h1>FlashCard App</h1>
    <div id="card">
      <p id="question"></p>
    </div>
    `
question = document.getElementById("question")
question.innerHTML = randomQuestion.question

function showAnswer(answer) {
    answer = document.getElementById("answer")
    answer.innerHTML = randomQuestion.answer

}