import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EditItem from "../components/EditItem";
import SuccessMessage from "../components/SuccessMessage";

const ItemDetails = () => {
  const [editState, setEditState] = useState(false);
  const { warehouse } = useSelector((store) => store);
  const { id } = useParams();
  const editItem = warehouse.find((item) => item.id == id);
  const [messageState, setMessageState] = useState(false);

  const navigate = useNavigate();

  const handleEdit = () => {
    setEditState(!editState);
  };
  const handleBack = () => {
    navigate("/");
  };

  const handleMessage = () => {
    setMessageState(!messageState);
    
    setTimeout(() => {
      setMessageState(false);
    },2000)
  }

  const {
    name,
    code,
    city,
    space_available,
    type,
    cluster,
    is_registered,
    is_live,
  } = editItem;

  return (
    <>
      <h2 style={{textAlign:"center", margin:"5rem auto 1rem auto"}}>{editState ? "Edit Details" : "Item Details"}</h2>
      
      { messageState && <SuccessMessage /> }
      <DIV>
        {editState ? (
          <EditItem key={id} handleEdit={handleEdit} handleMessage={handleMessage} />
        ) : (
          <div>
            <h5>{name}</h5>
            <p>Code: {code} </p>
            <p>City: {city} </p>
            <p>Type: {type} </p>
            <p>Cluster: {cluster} </p>
            <p>Space available: {space_available} </p>
            <p>Registered: <span className={is_registered ? "green" : "red"}>{is_registered ? "Yes" : "No"}</span> </p>
            <p>Live: <span className={is_live ? "green" : "red"}>{is_live ? "Yes" : "No"}</span></p>
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleBack}>Back</button>
            </div>
          </div>
        )}
      </DIV>
    </>
  );
};

export default ItemDetails;

const DIV = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;

  h5,p {
    margin-bottom: 0.5rem;
  }
  button {
    padding: 0.2% 0.4rem;
    margin: 0.5rem 0.5rem 0 0;
  }

  .green {
    color: green;
  }

  .red {
    color: red;
  }
`;
