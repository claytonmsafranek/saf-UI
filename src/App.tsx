import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HomePage from './pages/home/HomePage';

// tanstack query client
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/test' element={<h1>TEST PAGE</h1>} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
