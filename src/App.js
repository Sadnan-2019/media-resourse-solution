import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';
import Service from './Components/Service/Service';
import Review from './Components/Review/Review';
import Clients from './Components/Clients/Clients';
import Footer from './Components/Footer/Footer';
import Working from './Components/Working/Working';
import Achievement from './Components/Achievement/Achievement';
import Contact from './Components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Working from './Components/Working/Working';

function App() {
  return (
    <div className=" ">
      <Nav></Nav>
      <Landing></Landing>
      <Service></Service>
      <Review></Review>
      <Clients></Clients>
      <Working></Working>
      <Achievement></Achievement>
      <Contact></Contact>
      <Footer></Footer>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/news-media" element={<NewsMedia />}></Route>
        {/* <Route path="/career" element={<Carrer />}></Route>
        <Route path="/about" element={<About />}></Route> */}
      </Routes>
   
      
    </div>
  );
}

export default App;
