import React from 'react';
import Login from '../components/Login'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Courses from '../components/Courses'
import IT from '../components/courses/IT'
import CSE from '../components/courses/Cse'
import CCE from '../components/courses/CCE'
import AIDS from '../components/courses/AiDs' 
import AIML from '../components/courses/AiMl'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return(
<>
<BrowserRouter>
<Routes>
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/navbar" element={<Navbar />} />
    <Route path="/Courses" element={<Courses />} />
    <Route path="/Courses/IT" element={<IT />} />
    <Route path="/Courses/CSE" element={<CSE />} />
    <Route path="/Courses/CCE" element={<CCE />} />
    <Route path="/Courses/AiDs" element={<AIDS />} />
    <Route path="/Courses/AiMl" element={<AIML />} />
  </Route>
</Routes>
</BrowserRouter>
</>
  )
}
export default App;