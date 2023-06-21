import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';
import Service from './Components/Service/Service';
import Review from './Components/Review/Review';

function App() {
  return (
    <div className=" ">
      <Nav></Nav>
      <Landing></Landing>
      <Service></Service>
      <Review></Review>
    </div>
  );
}

export default App;
