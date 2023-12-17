import 'tailwindcss/tailwind.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Student from './Pages/Student';
import User from './Pages/User';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/user" element={<User/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App