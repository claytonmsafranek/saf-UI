import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home/HomePage';
import ProjectDetail from './pages/Projects/ProjectDetail';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
