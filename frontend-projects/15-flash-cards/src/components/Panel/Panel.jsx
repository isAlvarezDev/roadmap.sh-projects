import './Panel.css'

export default function Panel({ canShowAnswer, answer, question }) {
    return(
        <h2 className='message'>{canShowAnswer ? answer : question}</h2>
    )
}