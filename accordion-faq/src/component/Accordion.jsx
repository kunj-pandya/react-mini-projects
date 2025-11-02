import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

const Accordion = ({ data }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (id) => {
        if (activeIndex === id) {
            setActiveIndex(null);
        } else {
            setActiveIndex(id);
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-900">
            <div className="w-full flex flex-col ju max-w-md mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100">
                <h2 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h2>

                {data.map((item) => (
                    <div
                        key={item.id}>
                        <div
                            onClick={() => handleToggle(item.id)}
                            className="mb-3 border border-gray-300 rounded-md bg-white shadow-sm transition-all"
                        >
                            <h3
                                className="w-full flex justify-between items-center p-4 text-left rounded-md font-semibold text-gray-800 bg-gray-300"
                            >
                                {item.question}

                                <span>{activeIndex === item.id ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}</span>
                            </h3>


                            {activeIndex === item.id &&
                                (
                                    <div
                                        className="p-4 bg-gray-50 border-gray-300"
                                    >
                                        <p className="text-gray-600 text-sm">{item.answer}</p>
                                    </div>
                                )}

                        </div>
                    </div>
                ))
                }
            </div >
        </div>
    )
}

export default Accordion;
