import React from 'react'
import { villas } from '../villas';
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Villas = () => {
    return (
        <>
            <div className="page" id='allVillas'>
                <h1>ALL VILLAS</h1>
                <p>{villas.length} Properties</p>
                <div className="villasContainer">
                    {villas.map((villa) => {
                        return (
                            <Link to={`/villa/${villa.id}`} className="card" key={villa.id}>
                                <img src={villa.image} alt={villa.name} />
                                <div className="location_text">
                                    <span>{villa.location}</span>
                                    <span>
                                        <RxDot />
                                    </span>
                                    <span>{villa.category}</span>
                                </div>
                                <div className="title_text">{villa.name}</div>
                                <div className="specifications">
                                    <div className="spec">
                                        <IoIosPeople />
                                        <span>{villa.guests}</span>
                                        Guests
                                    </div>
                                    <div className="spec">
                                        <FaBed />
                                        <span>{villa.bedrooms}</span>
                                        Bedrooms
                                    </div>
                                    <div className="spec">
                                        <BiArea />
                                        <span>{villa.squareMeter}</span>
                                        Area
                                    </div>
                                    <div className="spec">
                                        <FaBath />
                                        <span>{villa.bathrooms}</span>
                                        Bathrooms
                                    </div>
                                </div>
                                <div className="badge">
                                    From <span>€{villa.dailyRent} / Day </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Villas;
