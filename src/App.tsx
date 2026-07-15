import './App.css'
import NavBar from './components/NavBar'
import ComponentsPage from './components/pages/ComponentsPage'
import ConditionalRenderingPage from './components/pages/ConditionalRenderingPage'
import EventHandlingPage from './components/pages/EventHandlingPage'
import ExternalDataPage from './components/pages/ExternalDataPage'
import { BrowserRouter as Router, Routes, Route } from "react-router"
import StatePage from './components/pages/StatePage'
import LiftingStatePage from './components/pages/LiftingStatePage'

function App() {
  /* <> is a react fragment, cuts down on the need for extra divs */


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Intro to React</h1>} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/conditional" element={<ConditionalRenderingPage />} />
        <Route path="/external" element={<ExternalDataPage />} />
        <Route path="/events" element={<EventHandlingPage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/lifting" element={<LiftingStatePage />} />
      </Routes>
      <footer>
        <p>Copyright 2026</p>
      </footer>
    </Router>
  )
}

export default App