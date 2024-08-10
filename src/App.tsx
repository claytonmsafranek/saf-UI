import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<h1>Saftware.dev, coming soon...</h1>} />
      <Route path='/test' element={<h1>TEST PAGE</h1>} />
    </Routes>
  )
}

export default App
