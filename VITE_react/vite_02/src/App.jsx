import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Css from "./pages/Ex07"
import TodoList from "./pages/Ex08"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">Home</Link> | {" "}
      <Link to="/ex07">예제7</Link> | {" "}
      <Link to="/ex08">예제8</Link> | {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex07" element={<Css />} />
        <Route path="/ex08" element={<TodoList />} />
      </Routes>
    </>
  )
}

export default App
