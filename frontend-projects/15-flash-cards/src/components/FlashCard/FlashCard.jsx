import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import Panel from "../Panel/Panel.jsx";
import QuestionNavegator from "../QuestionNavegator/QuestionNavegator.jsx";
import data from "../../data/data.js";
import { useState } from "react";

export default function FlashCard() {
  const [index, setIndex] = useState(0);
  const [porcentage, setPorcentage] = useState(5);
  const [showAnswer, setShowAnswer] = useState(false);

  function handlePrevClick() {
    if(index !== 0) {
        setIndex(prevIndex => prevIndex - 1)
        setPorcentage(prevPorcentage => prevPorcentage - 5)
    } else {}
  }

  function handleNextClick() {
    if(index !== 19) {
        setIndex(nextIndex => nextIndex + 1)
        setPorcentage(nextPorcentage => nextPorcentage + 5)
    } else {}
  }

  return (
    <section>
      <h1>Flash Cards</h1>
      <div>
        <ProgressBar index={index} porcentage={porcentage + '%'} />
        <Panel
          canShowAnswer={showAnswer}
          answer={data[index].answer}
          question={data[index].question}
        />
        <QuestionNavegator
          onPrevClick={handlePrevClick}
          onClick={_ => setShowAnswer(!showAnswer)}
          onNextClick={handleNextClick}
          canShowAnswer={showAnswer}
        />
      </div>
    </section>
  );
}