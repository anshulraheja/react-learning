import { useState, useEffect } from "react";
import "../quizService/style.css";
import quizService from "../quizService";

export default function QuizBee() {
  //state variable for value retention
  const [questionBank, setQuestionBank] = useState([]);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState(0);
  //to get data from quizService
  function getQuestion() {
    quizService().then((question) => setQuestionBank(question));
  }

  //to change question on page refresh
  useEffect(() => {
    getQuestion();
  }, []);

  //to check the selected option and increment score if right
  function computeAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);
      // console.log(newScore);
    }
    const total = response < 5 ? response + 1 : 5;
    setResponse(total);
    // console.log(total);
  }

  //play again func
  const playAgain = () => {
    setQuestionBank([]);
    setScore(0);
    setResponse(0);
    getQuestion();
  };

  return (
    <div className="container">
      <div className="title">QuizBee</div>
      {questionBank.length > 0 &&
        response < 5 &&
        questionBank.map(({ question, answers, correct, questionId }) => (
          <QuestionBox
            question={question}
            options={answers}
            keys={questionId}
            selected={(answer) => computeAnswer(answer, correct)}
          />
        ))}
      {/* {console.log(typeof response)} */}
      {response === 5 ? <Result score={score} playAgain={playAgain} /> : null}
    </div>
  );
}

//question comp
const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);

  function hideIncorrect(text) {
    setAnswer([text]);
    selected(text);
  }
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          className="answerBtn"
          key={index}
          onClick={() => hideIncorrect(text)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

//result component

const Result = ({ score, playAgain }) => {
  return (
    <div className="score-board">
      <div className="score">You scored {score} / 5</div>
      <button className="playBtn" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
};
