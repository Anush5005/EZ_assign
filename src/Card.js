import React from "react";
import "./card.css";
function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      <img src={icon} alt={`${title} icon`} className="service-icon" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
