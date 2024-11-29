import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from "./pages/Home";
import About from "./pages/About"; 
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App() {
  return (
     <BrowserRouter>
     <Header/>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Courses" element = {<Courses/>} />
          <Route path="/courses/:id" element={<CourseDetail/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
