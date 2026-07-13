import './App.css'
import Input from './components/Input'
import Trainer from './components/Trainer'

function App() {
  /* <> is a react fragment, cuts down on the need for extra divs */
  return (
    <>
      <h1>Intro to React</h1>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h2>Components</h2>
        <Trainer name="JH" age={32} specialty="Java" />
        {Trainer({ name: "JH", age: 32, specialty: "Java" })}
        <Trainer age={33} name="CG" specialty="Web" />
        <input onChange={e => console.log(e.target.value)} required />
        <Input />

      </div>
    </>
  )
}

export default App