import "./ProgressBar.css";

export default function ProgressBar({ index, porcentage }) {
    let progressBarStyles = {
        width: porcentage,
        backgroundColor: "light-dark(#149, #28b)",
        color: "white",
        borderRadius: 4,
        transition: "width .3s, background-color .3s ease-in-out",
    }

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={progressBarStyles} aria-valuenow={porcentage} aria-valuemax='100'>
                <p className="porcentage">{porcentage}</p>
            </div>
            <span className="rest">{index + 1}/20</span>
        </div>
    )
}