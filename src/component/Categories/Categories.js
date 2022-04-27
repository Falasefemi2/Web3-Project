import React from 'react';
import CategoriesCircle from '../Common/CategoriesCircle/CategoriesCircle';
import "./categories.css";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <div className="logo">Lo<span className='cat-color'>go</span></div>
      <div className="text">
        <div className="section__margin section__padding">
          <div className="head-text">Choose Your <span>Catagories</span></div>
          <p className="p-text">You can select one or more</p>
        </div>

        <div className="categories__item">
          <CategoriesCircle catText="Painting" catCircle="" />
          <CategoriesCircle catText="Sculpture" catCircle="" />
          <CategoriesCircle catText="Literature" catCircle="" />
          <CategoriesCircle catText="Cinema" catCircle="" />
          <CategoriesCircle catText="Cinema" catCircle="" />
        </div>

        <div className="categories__item">
          <CategoriesCircle catText="Painting" catCircle="" />
          <CategoriesCircle catText="Sculpture" catCircle="" />
          <CategoriesCircle catText="Literature" catCircle="" />
          <CategoriesCircle catText="Cinema" catCircle="" />
          <CategoriesCircle catText="Cinema" catCircle="" />
        </div>

        <div className="categories__item">
          <CategoriesCircle catText="Painting" catCircle="" />
          <CategoriesCircle catText="Sculpture" catCircle="" />
          <CategoriesCircle catText="Literature" catCircle="" />
          <CategoriesCircle catText="Cinema" catCircle="" />
          <CategoriesCircle catText="Cinema" catCircle="" />
        </div>

        <div className="categories__item">
          <CategoriesCircle catText="Painting" catCircle="" />
          <CategoriesCircle catText="Sculpture" catCircle="" />
          <CategoriesCircle catText="Literature" catCircle="" />
          <CategoriesCircle catText="Cinema" catCircle="" />
          <CategoriesCircle catText="Cinema" catCircle="" />
        </div>
        
        <Link to="/FavouriteArtist">
        <div className="cat__btn">
        <div className="button">
          <div className="btn-text">Next</div>
        </div>
        </div>
        </Link>

      </div>
    </div>
      )
}

      export default Categories