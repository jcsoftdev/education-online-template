import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Subjects from './pages/Subjects'
import { rutas } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Navbar links={rutas.links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/cursos/:id" element={<Subjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
