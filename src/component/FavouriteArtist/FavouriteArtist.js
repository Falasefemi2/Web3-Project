import React from 'react';
import "./favouriteartist.css";
import paintGirl from "../../assets/GirlPaint.jpg"
import FavCard from '../Common/FavCard/FavCard';

const FavouriteArtist = () => {
    return (
        <div className="favourite__artist">
            <div className="logo">Lo<span className='cat-color'>go</span></div>
            <div className="text">
                <div className="section__margin section__padding">
                    <div className="head-text">Choose Your <span>Favorite Artists</span></div>
                    <p className="p-text">Follow one or more</p>
                </div>
            </div>

            <div className="fav__card-container">
                <FavCard favImage={paintGirl} favText="Leonardo" />
                <FavCard favImage={paintGirl} favText="Leonardo" />
                <FavCard favImage={paintGirl} favText="Leonardo" />
                <FavCard favImage={paintGirl} favText="Leonardo" />
            </div>

            <div className="fav__card-container">
                <FavCard favImage={paintGirl} favText="Leonardo" />
                <FavCard favImage={paintGirl} favText="Leonardo" />
                <FavCard favImage={paintGirl} favText="Leonardo" />
                <FavCard favImage={paintGirl} favText="Leonardo" />
            </div>
            
        </div>
    )
}

export default FavouriteArtist