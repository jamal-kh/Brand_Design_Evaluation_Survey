const QuestionSection = document.querySelector(".Questions");
const SendBtn = document.querySelector("#Send");

let Result = 0;
let msg = "";
const Questions = [
  {
    question:
      "Does your current brand accurately reflect your message, vision, and core values?",
    value: 0,
    selected: false,
  },
  {
    question:
      "Do you feel that your brand effectively distinguishes you from your competitors?",
    value: 0,
    selected: false,
  },
  {
    question:
      "Do you believe that your brand effectively targets the right audience?",
    value: 0,
    selected: false,
  },
  {
    question:
      "Have you noticed an improvement in customer loyalty to your brand?",
    value: 0,
    selected: false,
  },
  {
    question: "Do you see that your brand helps increase your sales?",
    value: 0,
    selected: false,
  },
  {
    question: "Do you think that your brand design is attractive?",
    value: 0,
    selected: false,
  },
  {
    question: "Do you feel that your brand is trustworthy?",
    value: 0,
    selected: false,
  },
  {
    question: "Do you feel that your brand is trustworthy?",
    value: 0,
    selected: false,
  },
  {
    question:
      "Do you think that your brand accurately reflects your company's values and culture?",
    value: 0,
    selected: false,
  },
  {
    question:
      "Do you think that your brand is clear and understandable to everyone?",
    value: 0,
    selected: false,
  },
];

QuestionSection.innerHTML = Questions.map((Question, index) => {
  return `<div class="QuestionBlock">
            <div class="QuestionText">${Question.question}</div>
        <ul data-index=${index}>
            <li><input type="radio" name="option${index}" value="2" onclick="AddToResult(event)"/></li>
            <li><input type="radio" name="option${index}" value="4" onclick="AddToResult(event)"/></li>
            <li><input type="radio" name="option${index}" value="6" onclick="AddToResult(event)"/></li>
            <li><input type="radio" name="option${index}" value="8" onclick="AddToResult(event)"/></li>
            <li><input type="radio" name="option${index}" value="10" onclick="AddToResult(event)"/></li>
        </ul>
    </div>`;
}).join("");

function AddToResult(event) {
  const elementValue = event.target.value;
  const QuestionIndex = event.target.parentElement.parentElement.dataset.index;

  let QuestionSet = Questions[QuestionIndex];

  if (elementValue && QuestionIndex) {
    QuestionSet.value = elementValue;
    QuestionSet.selected = true;
  }
}

SendBtn.onclick = () => {
  let values = Questions.reduce((total, value) => total + +value.value, 0);
  Result = values;

  if (Result >= 80) {
    msg = "Excellent";
  } else if (Result >= 50) {
    msg = "Very Good";
  } else if (Result == 50) {
    msg = "Good";
  } else if (Result < 50 && Result > 30) {
    msg = "Bad";
  } else if (Result <= 30) {
    msg = "Very Bad";
  }

  alert(msg);
};
