import React from "react";
import "./Card.css";
const Card = ({ item }) => {
  const { name, img, Mileage, Location, Engine, Transmission, Price } = item;
  return (
    <div className="item">
      <div>
        <p className="para">Monday 1245</p>
        <h4>{name}</h4>
      </div>

      <img src={img} alt="" />
      <div className="para_list">
        <p>
          Mileage:<span>{Mileage}</span>
          Location:<span>{Location}</span>
        </p>
        <p>
          Engine: <span>{Engine}</span> Transmission:<span>{Transmission}</span>
        </p>
      </div>
      <div className="card_bottom">
        <p>{Price}</p> <button className="bottom__button">More details</button>
      </div>
    </div>
  );
};

export default Card;
