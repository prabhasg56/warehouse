import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <DIV>
        <Link to="/"><h2>Warehouse</h2></Link>
    </DIV>
  )
}

export default Navbar

const DIV = styled.div `
    text-align: left;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    a {
      text-decoration: none;
    }

    a:active {
      color: black
    }
`