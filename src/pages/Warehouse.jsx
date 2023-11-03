import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WarehouseList from "../components/WarehouseList";
import Sidebar from "../components/Sidebar";

const Warehouse = () => {
  return (
    <DIV className="warehouse-container">
      <Sidebar />
      <WarehouseList />
    </DIV>
  );
};

export default Warehouse;

const DIV = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 10px;
  margin-top: 10px;

  > div {
    border: 1px solid gray;
    padding: 10px;
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
