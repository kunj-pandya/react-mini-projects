import React from 'react';
import HeroSection from '../subComponents/HeroSection';
import TopVillas from '../subComponents/TopVillas';

const Home = () => {
    return (
        <>
            <article className='page'>
                <HeroSection />
                <TopVillas />
            </article>
        </>
    )
}

export default Home;
