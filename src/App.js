import "./input.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./page/LandingPage";
import DetailsPage from './page/DetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gradient-to-b from-[White] to-[#96BE7F] h-screen">
      <Navbar />
      <Routes>
        <Route path =  "/" element={<LandingPage />}></Route>
        <Route path = "/details" element={<DetailsPage />} />
       </Routes>
    </div>
  );
}

export default App;
