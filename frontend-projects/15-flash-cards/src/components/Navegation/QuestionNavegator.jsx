import './QuestionNavegator.css'

export default function QuestionNavegator({ onPrevClick, canShowAnswer, onNextClick }) {
    return(
        <div className='navegation'>
            <button onClick={onPrevClick}>{'< Previous'}</button>
            <button>{canShowAnswer ? 'Hide Answer' : 'Show Answer'}</button>
            <button onClick={onNextClick}>{'Next >'}</button>
        </div>
    )
}