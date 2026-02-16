import { useState } from "react"

function ThemeInput({ onSubmit }) {
    const [theme, setTheme] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!theme.trim()) {
            setError("Please enter a theme name");
            return
        }

        onSubmit(theme);
    }

    return <div className="theme-input-container">
        <div className="theme-input-header">
            <h2>Generate Your Adventure</h2>
            <p>Enter a theme and the story engine will bend it into something strange.</p>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    placeholder="Enter a theme (e.g. pirates, space, medieval...)"
                    className={error ? 'error' : ''}
                />
                {error && <p className="error-text">{error}</p>}
            </div>
            <button type="submit" className='generate-btn'>
                Generate Story
            </button>
        </form>

        <div className="theme-examples">
            <p>Try a few surreal seeds:</p>
            <div className="example-chips">
                <span>lunar carnival</span>
                <span>desert of mirrors</span>
                <span>clockwork jungle</span>
                <span>ocean of memory</span>
                <span>forgotten city</span>
            </div>
        </div>
    </div>
}

export default ThemeInput;