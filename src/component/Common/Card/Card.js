
import React, { useState } from 'react';
import "./card.css";

const Card = ({ image, cardText, pText, customClasses }) => {
    const [addBorder, setAddBorder] = useState("circle");
    const [addbg, setAddBg] = useState(false);

    const handleClick = (_event) => {
        setAddBorder("pink-circle")
    }

    const bodyPink = () => {
        setAddBg((currentValue) => !currentValue)
    }

    return (
        <div className="card">
            <div className={`card-body ${addbg}`} onClick={(e) => bodyPink}>
                <div className="card-img">
                    <img src={image} alt="" />
                </div>
                <div className={`card-text ${customClasses}`}>
                    <p>{cardText}</p>
                </div>
                <div className="p-card-text">
                    <p>{pText}</p>
                </div>
                <div className={addBorder} onClick={handleClick}>
                </div>
            </div>
        </div>
    )
}

export default Card

// bg-white
// bg-pink