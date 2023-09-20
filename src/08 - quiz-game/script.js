/**
 * TODO:
 *  * add a way to answer the question and validate the answer and display correct-ness {DONE}
 *  * show final score if all the question have been attempted {DONE}
 * ? Good to haves:
 *  * add a way to edit/delete questions
 *  * add a way to add questions in-website through <dialog> or something
 *  * better UI (hover effects on options, background, etc.)
 */

// format: 
// {question: "...", options: [...], correctAns: integer(0..3), solved: false}

var score = 0;

var questions = [
  {
    question: "When was javascript first released?",
    options: [
      "1998",
      "2000",
      "1995",
      "1989"
    ],
    correctAns: 2,
    solved: false
  },
  {
    question: "From where does the index of arrays start in javascript?",
    options: [
      "1",
      "-1",
      "0",
      "10"
    ],
    correctAns: 2,
    solved: false
  },
  {
    question: "What does the abbreviation HTML stand for?",
    options: [
      "HyperText Markdown language",
      "HyperText Markup Language",
      "HyperLink Markup language",
      "None of the above"
    ],
    correctAns: 1,
    solved: false
  }
]

function addQuestion(question, options, correctAnsIdx) {
  questions.push({ question: `${question}`, options: options, correctAns: correctAnsIdx, solved: false });
  updateDisplay();
}


function validateAnswer(elem, quesIdx) {
  if (questions[quesIdx].solved) return;
  var elemAnsOptions = document.getElementsByClassName("answer-options")[quesIdx];
  var iscorrect = elem.target.dataset.option == questions[quesIdx].correctAns;
  elemAnsOptions.children[questions[quesIdx].options.indexOf(elem.target.innerText)].style.backgroundColor = (iscorrect) ? "#20a020a0" : "#a02020a0";
  if (iscorrect) document.getElementById("score-number").innerHTML = ++score;
  questions[quesIdx].solved = true;
}

function addInputListeners(quesIdx) {
  document.getElementsByClassName("answer-options")[quesIdx]
    .addEventListener("click", elem => validateAnswer(elem, quesIdx))
}

function updateDisplay() {
  document.getElementById("container-questions").innerHTML = "";
  questions.map((q, idx) => {
    var format = `<p class="question">Q.${idx + 1}: ${q.question}</p><ol class="answer-options"><li data-option="0" type="A">${q.options[0]}</li><li data-option="1" type="A">${q.options[1]}</li><li data-option="2" type="A">${q.options[2]}</li><li data-option="3" type="A">${q.options[3]}</li></ol><hr color="#2d2d2d"></hr>`
    document.getElementById("container-questions").innerHTML += format;
    q.solved = false;
    document.getElementById("score-number").innerHTML = score = 0;
  });
  for (let i = 0; i < questions.length; i++) {
    addInputListeners(i);
  }
}

function clearDialog() {

  inpDialog = document.getElementById("add-question-dialog"),
    inpDialog_child_1 = inpDialog.children[1]
  inpDialog.children[0].value = "";
  for (let i = 0; i < 4; i++) {
    inpDialog_child_1.children[i].value = "";
  }
  inpDialog_child_1.children[4].value = 1;
}

function createQuestionFromDialog() {
  let
    inpDialog = document.getElementById("add-question-dialog"),
    inpDialog_child_1 = inpDialog.children[1],
    data = {
      question: inpDialog.children[0].value,
      options: [
        inpDialog_child_1.children[0].value,
        inpDialog_child_1.children[1].value,
        inpDialog_child_1.children[2].value,
        inpDialog_child_1.children[3].value
      ],
      correctAns: parseInt(inpDialog_child_1.children[4].value)
    }
  addQuestion(data.question, data.options, data.correctAns - 1);
  inpDialog.close();
  clearDialog();
}

updateDisplay()