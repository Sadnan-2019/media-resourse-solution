import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';

import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer";
import NewsMedia from './Components/NewsMedia/NewsMedia';
import NewsMediaLanding from './Components/NewsMedia/NewsMediaLanding';
// import Working from './Components/Working/Working';

function App() {
  return (
    <div className=" ">
      <Nav></Nav>
       
     
    
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/news-media" element={<NewsMedia />}></Route>
        {/* <Route path="/career" element={<Carrer />}></Route>
        <Route path="/about" element={<About />}></Route> */}
      </Routes>
      <Footer></Footer>
   
      
    </div>
  );
}

export default App;
