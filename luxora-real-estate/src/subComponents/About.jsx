import React from 'react'

const About = () => {
    return (
        <>
            <section id='aboutUs_Mini'>
                <div className='first_container'>
                    <div className='content'>
                        <h1>ABOUT US</h1>
                        <p>
                            At Luxora Real Estate, we believe finding the perfect home should be effortless and inspiring.
                            Our platform brings together premium properties, modern design, and trusted service to help you discover spaces that match your lifestyle.
                        </p>
                        <p>
                            With a passion for excellence and attention to detail, we aim to make every real estate experience seamless, transparent, and memorable.
                        </p>
                        <p>Our mission is to redefine modern living by connecting people with exceptional spaces that reflect their aspirations, inspire their lifestyle, and create lasting memories — transforming every stay into a true sense of home.</p>
                    </div>
                    <button>We strive to offer you best possible homes to stay!</button>
                </div>

                <div className='second_container'>
                    <div className='image_1'>
                        <img src="/people.jpg" alt="people" />
                    </div>
                    <div className='image_2'>
                        <img src="/people2.jpg" alt="people" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
