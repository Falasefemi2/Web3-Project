import React from 'react';
import Card from '../Common/Card/Card';
import "./text.css";
import gamedev from "../../assets/game-dev.jpg";
import girl from "../../assets/girl-paint.jpg";
import bitcoin from "../../assets/bitcoin.jpg";

const Text = () => {
  return (
    <div className="text">
        <div className="section__margin section__padding">
            <div className="head-text">How would you love to use <span>TheOriginals</span></div>
            <p className="p-text">Connect with one of our available wallet providers or create a new one.</p>
            <div className="card-top">
                <Card image={gamedev} cardText="Become a creator" pText="we need exact same thing  please check opensea we need exact same thing  please check opensea" customClasses="top" />
                <Card image={girl} cardText="Sell Degital Art Products" customClasses="text-center" />
                <Card image={bitcoin} cardText="Sell Physical Art
     Products" customClasses="text-center" />
            </div>
        </div>
    </div>
  )
}

export default Text