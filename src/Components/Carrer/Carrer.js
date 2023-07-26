import React from 'react';
import CarrerLanding from './CarrerLanding';
// import CarrerForm from './CarrerForm';
import Mytimeline from '../Mytimeline/Mytimeline';

const Carrer = () => {
    return (
        <div>
            <CarrerLanding></CarrerLanding>
            {/* <CarrerForm></CarrerForm> */}
            <Mytimeline></Mytimeline>
        </div>
    );
};

export default Carrer;