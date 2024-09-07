import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/home/AboutPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}

export default App
