import React from 'react';
// import Landing from "./"
import Landing from "../../Components/Landing/Landing";
import Service from "../../Components/Service/Service";
import Review from "../../Components/Review/Review";
// import Working from "../../Components/Working/Working";
import Working from "../../Components/Working/Working";
import Clients from "../../Components/Clients/Clients";
import Contact from "../../Components/Contact/Contact";


const Home = () => {
    return (
        <div>
    <Landing></Landing>
    <Service></Service>
    <Review></Review>
    <Working></Working>
    <Clients></Clients>
    <Contact></Contact>
        </div>
    );
};

export default Home;