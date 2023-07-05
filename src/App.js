import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';

import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer";
import NewsMedia from './Components/NewsMedia/NewsMedia';
import About from './Components/About/About';
// import NewsMediaLanding from './Components/NewsMedia/NewsMediaLanding';
import Carrer from './Components/Carrer/Carrer';
// import Contact from './Components/Contact/Contact';
import NewContact from './Components/Contact/NewContact';
import TopNav from './Components/TopNav/TopNav';
// import Working from './Components/Working/Working';

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <Nav></Nav>
       
     
    
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/news-media" element={<NewsMedia />}></Route>
        <Route path="/career" element={<Carrer/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<NewContact />}></Route>
      </Routes>
      <Footer></Footer>
   
      
    </div>
  );
}

export default App;
