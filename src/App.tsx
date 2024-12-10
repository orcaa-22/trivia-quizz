import React, { useState } from "react";
import { Data, QANDA } from "./Data";
import Modal from "./Modal";

function App() {
  let numOfCategorys = 0;
  let data: QANDA[][] = [];

  const [isOpen, setIsOpen] = useState(false);
  const [qora, setQora] = useState(false);

  Data.forEach(q => {
    if (data[q.Category] === undefined) {
      data.push([]);
      numOfCategorys += 1;
    }

    data[q.Category].push(q);
  });

  const [question, setQuestion] = useState(data[0][0]);
  let category: number = question.Category;

  function nextQuestion() {
    if (question.NumberOfQuestionInCategory === data[category].length) {

      if (!qora) {
        setIsOpen(true);
        return;
      }

      switchToAnswers();
      return;
    }

    setQuestion(q => data[category][q.NumberOfQuestionInCategory]);
  }

  function switchToAnswers() {
    if (isOpen)
      setIsOpen(false);

    setQora(true);
    setQuestion(data[category][0]);
  }

  function goBack() {
    if (question.NumberOfQuestionInCategory == 1)
      return;

    setQuestion(data[category][question.NumberOfQuestionInCategory - 2]);
    //2 because we are going -1 from 1 based array to 0 based array
  }

  function nextCategory() {
    setQora(false);
    if (category === numOfCategorys - 1)
      return;

    setQuestion(data[category + 1][0]);
    category += category;
  }

  function lastCategory() {
    if (category === 0)
      return;

    setQuestion(data[category - 1][0]);
    category += category;
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (isOpen) return;

    switch (e.key) {
      case "ArrowLeft":
        goBack();
        break;
      case "ArrowRight":
        nextQuestion();
        break;
      default:
        break;
    }
  }

  return (

    <div className={`flex flex-col h-screen w-screen bg-[url('/${category}.jpg')]`}
         style={{ backgroundImage: `url('${category}.jpg')` }}
         onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative flex items-center justify-center w-full h-full z-10">
        <h1 className="text-[40px] leading-[1.4] px-9 text-white text-center">
          {question.NumberOfQuestionInCategory}. {qora ? question.Answer : question.Question}
        </h1>
      </div>

      <div className="flex justify-center gap-5 items-end m-10 z-10">
        <button onClick={lastCategory}><img src="lastCat.svg" alt="last-category"></img></button>
        <button onClick={goBack}><img src="back.svg" alt="last-question"></img></button>
        <button onClick={nextQuestion}><img src="next.svg" alt="next-question"></img></button>
        <button onClick={nextCategory}><img src="nextCat.svg" alt="next-category"></img></button>
      </div>

      {isOpen && <Modal onNo={() => { setIsOpen(false) }} onYes={switchToAnswers} />}
    </div>
  )
}

export default App;
