import React, { useState } from 'react';
import "./CategoriesCircle.css";

const CategoriesCircle = ({ catText, catCircle }) => {
    const [click, setClick] = useState("catCircle")

    const handleClickPink = () => {
        setClick("catclickPink")
    }

    return (
        <div className="categories__circle">
            <div className="catText">{catText}</div>
            <div className={`${click}`} onClick={handleClickPink}>{catCircle}</div>
        </div>
    )
}

export default CategoriesCircle