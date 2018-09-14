// This script tests your code, it will run everytime you press the button 'run the tests'
// It will call your functions and will change you hero object a bit

const { expect, should } = chai

describe('Data Structure', function () {
  it('Declare a variable `data` and assign it an array', function () {
    expect(sinon.match.defined.test(data), 'No variable data found!').to.equal(true)
    expect(data, 'data is not an array').to.be.an('array')
  })

  it('The array should contain at least three objects', function () {
    expect(data, 'data has not a length of three or more').to.have.lengthOf.above(2)
    data.map((d, index) => {
      expect(d, `Element with index ${index}  is not an object`).to.be.an('object')
    })
  })

  it('Each object should have a property "question" with as a value, a string with a question', function () {
    data.map((d, index) => {
      expect(sinon.match.defined.test(d.question), `The object in your array with index ${index} has no property "question"`).to.equal(true)
      expect(d.question, `Your question in your array at index ${index} is no string`).to.be.a('string')
    })
  })

  it('Each object should have a property "answer" with as a value, a string with a answer', function () {
    data.map((d, index) => {
      expect(sinon.match.defined.test(d.answer), `The object in your array with index ${index} has no property "answer"`).to.equal(true)
      expect(d.answer, `Your question in your array at index ${index} is no string`).to.be.a('string')
    })
  })
})

describe('Functionality', function () {

  it('Declare a function called "pickRandomNumber", and assign it a random number >= 0 and < the largest index number of your data array', function () {
    expect(sinon.match.defined.test(pickRandomNumber), 'Cant find "pickRandomNumber".').to.exist
    expect(pickRandomNumber, 'pickRandomNumber is not a number!').to.be.a('function')
    // expect(randomNumber, 'Your number is not a integer!').to.be.an('integer')
    expect(pickRandomNumber(), 'pickRandomNumber is a negative number!').to.be.above(-1)
    expect(pickRandomNumber(), 'pickRandomNumber is bigger than the largest index in your array!').to.be.below(data.length)
  })

  it('Calling the function "pickRandomQuestion()", should return a random element from the data array', function () {
    expect(sinon.match.defined.test(pickRandomQuestion), 'No function pickRandomQuestion found!').to.equal(true)
    expect(pickRandomQuestion, 'Your pickRandomQuestion is not a function!').to.be.a('function')
    expect(pickRandomQuestion(), 'Your pickRandomQuestion function does not return an object!').to.be.an('object')
    expect(pickRandomQuestion(), 'Your pickRandomQuestion function does not have a property key "question"!').to.have.deep.property('question')
    expect(pickRandomQuestion(), 'Your pickRandomQuestion function does not have a property key "answer"!').to.have.deep.property('answer')

    //TODO: Optimize
    const randomQuestion = pickRandomQuestion()
    const randomQuestionData = data.filter(d => d.question === randomQuestion.question)
    expect(randomQuestionData, 'Your random question is not in your Data array!').to.have.lengthOf.above(0)
  })

  it('You should store the outcome of "pickRandomQuestion()" in a variable called "randomQuestion"', function () {
    expect(sinon.match.defined.test(randomQuestion), 'No variable randomQuestion found!').to.equal(true)
    expect(randomQuestion, 'randomQuestion is not assigned an object!').to.be.an('object')
  })
})

describe('Render On Screen', function () {
  it('Your page should render an <h1> element rendering the title of your app which has an id-attribute with the value "title" ', function () {
    expect(document.getElementById('title'), 'You have not 1 <h1> element rendering with an id="title" attribute!').to.exist
  })

  it('Your page should render a <div> element which has an id-attribute with the value "card" ', function () {
    expect(document.getElementById('card'), 'You have not a <div> element rendering with an id="card" attribute!').to.exist
  })

  it('Your card-div should have a <p> element which has an id, "question" and display the question', function () {
    expect(document.getElementById('question'), 'You have not a <p> element rendering with an id="question" attribute!').to.exist
    const questionInData = data.filter(d => d.question === document.getElementById('question').innerHTML)
    expect(questionInData, 'Find this <p> element in your JS file and reassign the innerHTML property the value of the "Question" property of "randomQuestion"').to.have.lengthOf.above(0)
  })
})

describe('User interaction', function(){
  const showAnswerButton = document.getElementById('showAnswer')

  it('Create an empty <p> element with an id "answer" in your html file', function() {
    expect(document.getElementById('answer'), 'There is no <p> element with the id "answer"').to.exist
  })

  it('Declare a function "showAnswer" in your JS file with one parameter "answer"', function () {
    expect(sinon.match.defined.test(showAnswer), 'No function showAnswer found!').to.equal(true)
    expect(showAnswer, 'Your showAnswer is not a function!').to.be.a('function')
  })

  it('The "showAnswer" function should reassign the value of the innerHTML of your "answer" element to the answer to your question', function(){
    showAnswer()
    const answerInData = data.filter(d => d.answer === document.getElementById('answer').innerHTML)
    expect(answerInData, 'Find this <p> element in your JS file and reassign the innerHTML property the value of the "answer" property of "randomQuestion"').to.have.lengthOf.above(0)
  })

  it('Your body should render a <button> element with an id "showAnswer" and display the text "Show Answer!', function() {
    expect(showAnswerButton, 'You have no <button> element rendering with and id="showAnsser"!').to.exist
    expect(showAnswerButton.innerHTML, 'It does not display "Show Answer!"').to.equal('Show Answer!')
  })

  it('The button with id "showAnswer" should have an eventListener "onclick" and an eventHandler "showAnswer"', function() {
    expect(showAnswerButton, 'There is no "onclick" event listener!').to.have.property("onclick")
    console.log(showAnswerButton.onclick.toString())
    expect(showAnswerButton.onclick.toString(), 'There is no "showAnswer" event handler!').to.equal('function () { showAnswer() }')
  })
})
