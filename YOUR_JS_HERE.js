const data = [{"question": "What is the largest country in the world?",
                "answer": "Russia"}, 
              {"question": "What is the largest mammal on earth?",
              "answer": "Blue Whale"}, 
              {"question": "What is the smallest country in the world?", 
              "answer": "Vatican City"},
]

const Got = [{"question": "Who is Jon Snow`s father?", "answer": "Rhaegar Targaryen"}, 
{"question": "Who is Jon Snow`s mother?", "answer": "Lyanna Stark"}]

function categorieGot(max) {
  max = Got.length
  index = Math.floor(Math.random() * Math.floor(max))
  printQuestion = document.getElementById("question")
  printQuestion.innerHTML = Got[index].question
  printAnswer = document.getElementById("answer")
  printAnswer.innerHTML = Got[index].answer
  printAnswer.style.display = "none"

}

function pickRandomNumber(max) {
    max = data.length
    return Math.floor(Math.random() * Math.floor(max))
}

const randomQuestion = pickRandomQuestion()


function pickRandomQuestion() {
  const index = pickRandomNumber()
  return data[index]
}

const title = document.getElementById('title')
title.innerHTML = `
    <h1>FlashCard App</h1>
    <div id="card">
    <p id="question"></p>
    </div>
    `


function showQuestion() {
    const question = document.getElementById("question")
    question.innerHTML = randomQuestion.question
}

function showAnswer() {
  const answer = document.getElementById("answer")

  if (answer.style.display === "none") {
      answer.style.display = "block"
  } 
  // else {
  //   answer.innerHTML = randomQuestion.answer
  // }

}

function nextQuestion() {

  const randomQuestion = pickRandomQuestion()
  const nextQuestion = document.getElementById("question")
    nextQuestion.innerHTML = randomQuestion.question

  const answer = document.getElementById("answer")
    answer.innerHTML = randomQuestion.answer
    answer.style.display = "none"

}

function addCard() {
  const inputField = document.getElementById('input')
  const question = inputField.value

  const inputAnswer = document.getElementById('inputAnswer')
  const answer = inputAnswer.value

  data.push({question, answer})
  // console.log(data)

}
