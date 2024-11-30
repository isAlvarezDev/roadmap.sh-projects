import "./QuestionNavegator.css";

export default function QuestionNavegator({
  onPrevClick,
  onClick,
  onNextClick,
  canShowAnswer,
}) {
  return (
    <div className="navegation">
      <span className="button" onClick={onPrevClick}>{"< Previous"}</span>
      <span className="button" onClick={onClick}>{canShowAnswer ? "Hide Answer" : "Show Answer"}</span>
      <span className="button" onClick={onNextClick}>{"Next >"}</span>
    </div>
  );
}
