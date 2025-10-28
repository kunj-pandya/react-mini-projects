import React from 'react';
import HeroSection from '../subComponents/HeroSection';
import TopVillas from '../subComponents/TopVillas';
import Regions from '../subComponents/Regions';

const Home = () => {
    return (
        <>
            <article className='page'>
                <HeroSection />
                <TopVillas />
                <Regions />
            </article>
        </>
    )
}

export default Home;
