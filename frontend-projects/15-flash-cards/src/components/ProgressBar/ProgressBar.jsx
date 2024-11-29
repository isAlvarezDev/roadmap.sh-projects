import "./ProgressBar.css";

export default function ProgressBar({ index, width }) {
    let progressBarStyles = {
        width: width,
        maxWidth: 500,
        backgroundColor: "#04AA6D",
        color: "white",
        transition: "width .4s, background-color .4s ease-in-out",
    }

    return (
        <div className="progress-bar-container">
            <div style={progressBarStyles}>
                <p className="porcentage">{width}</p>
            </div>
            <p className="rest">{index} of 25</p>
        </div>
    )
}