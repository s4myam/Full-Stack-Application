import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StoryLoader from "./components/StoryLoader"
import StoryGenerator from "./components/StoryGenerator.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="ambient-orbs" aria-hidden="true">
          <span className="orb orb-one" />
          <span className="orb orb-two" />
          <span className="orb orb-three" />
        </div>

        <header className="app-hero">

          <h1 className="hero-title">Choose Your Own Dream</h1>
          <p className="hero-subtitle">
            Seed a theme, shape the impossible, and wander through branching worlds.
          </p>
        </header>

        <main className="app-main">
          <Routes>
            <Route path={"/story/:id"} element={<StoryLoader />} />
            <Route path={"/"} element={<StoryGenerator />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <span>Crafted for curious minds.</span>
        </footer>
      </div>
    </Router>
  )
}

export default App
