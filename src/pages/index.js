import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/infoSection';
import Favs from '../components/Favs';
import { InfoData , InfoDataTwo } from '../data/InfoData';
import { SliderData } from '../data/SliderData';
import Quotes from '../components/Quotes';



const Home = () => {
    return (
        <>
        <Hero slides={SliderData}/>
        <InfoSection {...InfoData}/>
        <Favs />
        <Quotes />
        <InfoSection {...InfoDataTwo}/>

        </>
    )
}

export default Home;
