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
      <Footer></Footer>
      <Contact></Contact>
   
      
    </div>
  );
}

export default App;
