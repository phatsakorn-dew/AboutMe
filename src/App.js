import "./input.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EducationPage from './page/EducationPage';
import Home from './page/Home';
import AboutMePage from "./page/AboutMePage";
import Index from "./page/Index";
import Certification from "./page/Certification";

function App() {
  return (
    <div className="d">
      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/index" element={<Index />} />
        <Route path = "/education" element={<EducationPage />} />
        <Route path = "/aboutme" element={<AboutMePage />} />
        <Route path = "/certification" element={<Certification />} />
       </Routes>
    </div>
  );
}

export default App;
