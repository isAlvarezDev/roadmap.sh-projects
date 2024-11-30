import "./QuestionNavegator.css";

export default function QuestionNavegator({
  onPrevClick,
  onClick,
  onNextClick,
  canShowAnswer,
}) {
  return (
    <div className="navegation">
      <button className="button" onClick={onPrevClick}>{"< Previous"}</button>
      <button className="button" onClick={onClick}>{canShowAnswer ? "Hide Answer" : "Show Answer"}</button>
      <button className="button" onClick={onNextClick}>{"Next >"}</button>
    </div>
  );
}
