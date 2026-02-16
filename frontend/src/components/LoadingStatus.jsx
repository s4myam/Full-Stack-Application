function LoadingStatus({ theme }) {
    return <div className="loading-container">
        <div className="loading-header">
            <p className="loading-tag">Storycraft in progress</p>
            <h2>Generating Your {theme} Story</h2>
        </div>

        <div className="loading-animation" aria-hidden="true">
            <div className="orbit">
                <span className="orbit-dot"></span>
                <span className="orbit-dot"></span>
                <span className="orbit-dot"></span>
            </div>
        </div>

        <p className="loading-info">Please wait while we generate your story...</p>
    </div>
}

export default LoadingStatus;