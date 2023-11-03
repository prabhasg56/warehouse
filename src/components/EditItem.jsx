import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editWarehouseFailure, editWarehouseRequest, editWarehouseSuccess } from "../redux/action";
import axios from "axios";
import { baseURL } from "../redux/store";

const EditItem = ({handleEdit, handleMessage}) => {
  const { id } = useParams();
  const { warehouse } = useSelector((store) => store);
  const [item, setItem] = useState(
    warehouse.find((item) => item.id == id) || []
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let {name, value } = e.target;

    if(name == "is_live") {
      value = value == "true" ? true : false;
    } 

    if(name == "space_available") {
      value = +(value);
    }
    
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSave = () => {
    // console.log(item);

    dispatch(editWarehouseRequest());
    axios.patch(`${baseURL}/${id}`, item)
    .then((res) => {
      dispatch(editWarehouseSuccess(res.data));
    })
    .catch((err) => {
      dispatch(editWarehouseFailure());
      // console.log(err);
    })

    handleMessage();
    handleEdit();
  };
  return (
    <EDITDIV>
      <label>Warehouse Name</label>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <label>Cluster</label>
      <input
        type="text"
        name="cluster"
        value={item.cluster}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <label>City</label>
      <input
        type="text"
        name="city"
        value={item.city}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <label>Space Available</label>
      <input
        type="number"
        name="space_available"
        value={item.space_available}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <label>Warehouse Live Status</label>
      <div>
        <input
          type="radio"
          name="is_live"
          value={true}
          checked={item.is_live === true}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label htmlFor="">Live</label>
        <input
          type="radio"
          name="is_live"
          value={false}
          checked={item.is_live === false}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label htmlFor="">Not Live</label>
      </div>

      <button onClick={handleSave}>Save Changes</button>
    </EDITDIV>
  );
};

export default EditItem;

const EDITDIV = styled.div`
  position: "absolute";
  display: flex;
  flex-direction: column;
  label {
    margin-right: 0.5rem;
  }
  input {
    padding: 0.2rem;
    margin-bottom: 0.5rem;
    margin-right: 0.3rem;
  }
  button {
    width: 30%;
    padding: 0.2rem 0.5rem;
    margin: auto;
  }
`;
