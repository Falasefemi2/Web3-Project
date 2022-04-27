import React from 'react';
import "./favcard.css"

const FavCard = ({ favImage, favText }) => {
    return (
        <div className='favourtite__artist-card'>
            <div className="fav-img">
                <img src={favImage} alt="" className='favImage' />
            </div>
            <div className="fav-text">
                <div>{favText}</div>
            </div>
            <div className="fav-btn">
                <div className="button">
                    <div className="btn-text">Follow</div>
                </div>
            </div>
        </div>
    )
}

export default FavCard

