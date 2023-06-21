import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';
import Service from './Components/Service/Service';
import Review from './Components/Review/Review';
import Clients from './Components/Clients/Clients';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className=" ">
      <Nav></Nav>
      <Landing></Landing>
      <Service></Service>
      <Review></Review>
      <Clients></Clients>
      <Footer></Footer>
    </div>
  );
}

export default App;
