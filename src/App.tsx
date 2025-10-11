import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home/HomePage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
  )
}

export default App
