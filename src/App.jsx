import "./App.css";
import Header from "./components/header";
import Beranda from "./pages/Beranda";
import Visi from "./pages/Visi";
import Fakultas from "./pages/Fakultas";
import Fasilitas from "./pages/Fasilitas";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Beranda />} />
        
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/Fakultas" element={<Fakultas />}/>
        <Route path="/Visi" element={<Visi />} />
        <Route path="/Fasilitas" element={<Fasilitas/>}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
                                                                                                                                         
       
      
    </Router>
  );
}

export default App;
