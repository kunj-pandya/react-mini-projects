import React from 'react'

const Regions = () => {
    return (
        <>
            <section id="regions">
                <h1>OUR REGIONS</h1>
                <p>
                    Explore stunning destinations where luxury meets lifestyle.
                    From serene coastal escapes to vibrant cityscapes, each region offers a unique blend of culture, comfort, and charm.
                </p>
                <div className='region_container'>
                    <div className='card'>
                        <img src="/region1.jpg" alt='mountains' />
                        <h2>Mountains</h2>
                        <p><span>90</span>Properties</p>
                    </div>
                    <div className='card'>
                        <img src="/region2.jpg" alt='coastline' />
                        <h2>Coastline</h2>
                        <p><span>52</span>Properties</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Regions;
