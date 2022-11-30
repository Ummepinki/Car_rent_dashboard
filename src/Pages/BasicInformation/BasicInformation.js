import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Style.css";
const BasicInformation = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("Image.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="basic">
      <div className="basic__wrapper">
        <div className="basic__cards">
          {items.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
