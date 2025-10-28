import React from 'react'
import { villas } from '../villas'
import { Link } from 'react-router-dom'
import { RxDot } from 'react-icons/rx'
import { IoIosPeople } from 'react-icons/io'
import { FaBath, FaBed } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'

const TopVillas = () => {
    return (
        <>
            <section id='topVillas'>
                <h1>TOP PICK VILLAS</h1>
                <p>
                    Discover our handpicked collection of luxurious villas that blend comfort, style, and elegance.
                    Each property is carefully selected for its stunning design, premium amenities, and breathtaking surroundings — the perfect getaway for those who seek refined living and unforgettable experiences.
                </p>

                <div className='villasContainer'>
                    {
                        villas.slice(0, 3).map(villa => {
                            return (

                                <Link className='card' to={`/villa/${villa.id}`}>

                                    <img src={villa.image} alt={villa.name} />

                                    <div className='location_text'>
                                        <span>{villa.location}</span>
                                        <span><RxDot /></span>
                                        <span>{villa.category}</span>
                                    </div>

                                    <div className='title_text'>
                                        {villa.name}
                                    </div>

                                    <div className='specifications'>

                                        <div className='spec'>
                                            <IoIosPeople />
                                            <span>{villa.guests}</span>
                                            Guests
                                        </div>

                                        <div className='spec'>
                                            <FaBed />
                                            <span>{villa.bedrooms}</span>
                                            Bedrooms
                                        </div>

                                        <div className='spec'>
                                            <BiArea />
                                            <span>{villa.squareMeter}</span>
                                            Area
                                        </div>

                                        <div className='spec'>
                                            <FaBath />
                                            <span>{villa.bathrooms}</span>
                                            Bathrooms
                                        </div>

                                    </div>

                                </Link>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default TopVillas
