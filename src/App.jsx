import 'tailwindcss/tailwind.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Student from './Pages/Student';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App