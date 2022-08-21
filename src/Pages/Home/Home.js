import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Services from './Services';
import Trainer from './Trainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Trainer></Trainer>
            <Footer></Footer>
        </div>
    );
};

export default Home;