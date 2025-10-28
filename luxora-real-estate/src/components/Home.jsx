import React from 'react';
import HeroSection from '../subComponents/HeroSection';
import TopVillas from '../subComponents/TopVillas';
import Regions from '../subComponents/Regions';
import OurSpecialities from '../subComponents/OurSpecialities';
import Host from '../subComponents/Host';

const Home = () => {
    return (
        <>
            <article className='page'>
                <HeroSection />
                <TopVillas />
                <Regions />
                <OurSpecialities />
                <Host />
            </article>
        </>
    )
}

export default Home;
