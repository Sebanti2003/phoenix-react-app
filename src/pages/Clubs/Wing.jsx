import React from 'react'
import { useLocation } from 'react-router-dom';

const Wing = () => {
    const location = useLocation()

    const { name, aboutExtended, members, gallery } = location.state;

    return (
        <div>
            <div className="intro-secondary flex gap-12 justify-start z-1 flex-col md:flex-row px-5 ">
                <div className="w-full md:w-40 text-white">
                    <p className="text-[2rem] md:text-[3rem] font-[800]">{name}</p>
                </div>
            </div>

        </div>
    )
}

export default Wing;