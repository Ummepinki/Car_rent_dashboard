import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AddCharacteristics from "../Pages/AddCharacteristics/AddCharacteristics";
import BasicInformation from "../Pages/BasicInformation/BasicInformation";
import CarCost from "../Pages/CarCost/CarCost";
import Color from "../Pages/Color/Color";

import SearchRegion from "../Pages/SearchRegion/SearchRegion";
import Vehicle from "../Pages/Vehicle/Vehicle";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/basic" element={<BasicInformation />}></Navigate>
          }
        />
        <Route path="/basic" element={<BasicInformation></BasicInformation>} />
        <Route path="/carcost" element={<CarCost></CarCost>} />
        <Route path="/searchregion" element={<SearchRegion></SearchRegion>} />
        <Route path="/vehicle" element={<Vehicle></Vehicle>} />
        <Route
          path="/addcharactistics"
          element={<AddCharacteristics></AddCharacteristics>}
        />

        <Route path="/color" element={<Color></Color>} />
      </Routes>
    </div>
  );
};

export default Router;
