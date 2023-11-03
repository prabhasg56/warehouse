import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  getWarehouseFailure,
  getWarehouseRequest,
  getWarehouseSuccess,
} from "../redux/action";
import { baseURL } from "../redux/store";

const WarehouseList = () => {
  const { isLoading, warehouse } = useSelector((store) => store);
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const paramObj = {
    params: {
      city: searchParams.getAll("city"),
      cluster: searchParams.getAll("cluster"),
      q: searchParams.get("query"),
      space_available_lte: searchParams.getAll("limit"),
    },
  };

  useEffect(() => {
    dispatch(getWarehouseRequest());
    axios
      .get(`${baseURL}`, paramObj)
      .then((res) => {
        dispatch(getWarehouseSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getWarehouseFailure());
      });
  }, [searchParams]);

  return (
    <DIV>
      {warehouse.length > 0 &&
        warehouse?.map((ele) => {
          return <ItemCard key={ele.id} {...ele} />;
        })}
    </DIV>
  );
};

export default WarehouseList;

const DIV = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (min-width: 481px) and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
