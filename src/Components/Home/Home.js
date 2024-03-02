import React from 'react';
// import Landing from "./"
import Landing from "../../Components/Landing/Landing";
import Service from "../../Components/Service/Service";
import Review from "../../Components/Review/Review";
// import Working from "../../Components/Working/Working";
import Working from "../../Components/Working/Working";
import Clients from "../../Components/Clients/Clients";
import Contact from "../../Components/Contact/Contact";
import Achievement from '../Achievement/Achievement';
import WeDO from '../WeDO/WeDO';
import Motion from '../Motion/Motion';


const Home = () => {
    return (
        <div>
    <Landing></Landing>
    <Service></Service>
    {/* <WeDO></WeDO> */}
    
    <Achievement></Achievement>   
    <Working></Working>
    {/* <Clients></Clients> */}

    <Review></Review>
   <Contact></Contact>

    <Motion></Motion>
        </div>
    );
};

export default Home;