import React from 'react'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import ItemDetails from '../pages/ItemDetails';

const ItemCard = ({id, name, city, space_available, cluster}) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`)
  }

  return (
    <DIV onClick={handleClick}>
      <h6>Name: {name} </h6>
      <p>City: {city} </p>
      <p>Cluster: {cluster} </p>
      <p>Space available: {space_available} </p>
    </DIV>
  )
}

export default ItemCard


const DIV = styled.div `
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    height: 7rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
`
