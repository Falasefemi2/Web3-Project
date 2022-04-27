import React from 'react';
import "./button.css";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link style={{ textDecoration: 'none' }} to="/Categories">
      <div className="button">
        <div className="btn-text">Next</div>
      </div>
    </Link>
  )
}

export default Button