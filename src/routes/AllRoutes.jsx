import React from "react";
import { Routes, Route } from "react-router-dom";
import Warehouse from "../pages/Warehouse";
import ItemDetails from "../pages/ItemDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Warehouse />} />
      <Route path="/details/:id" element={<ItemDetails />} />
    </Routes>
  );
};

export default AllRoutes;
