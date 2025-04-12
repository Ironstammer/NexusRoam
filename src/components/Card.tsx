
import React from 'react';
import './styles/Card.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
  rating?: number;
  buttonText?: string;
  onClick?: () => void;
}

const Card = ({ 
  title, 
  description, 
  image, 
  rating = 0, 
  buttonText = "View Details", 
  onClick 
}: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <div className="card-rating">
          <span>★</span> {rating.toFixed(1)}
        </div>
        <button className="card-button" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
