import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

const Sidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.getAll("city") || []);
  const [cluster, setCluster] = useState(searchParams.getAll("cluster") || []);
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [limit, setLimit] = useState(searchParams.get("limit") || 12345);

  const handleCity = (e) => {
    const { value } = e.target;

    let newCity = [...city];

    if (newCity.includes(value)) {
      newCity = newCity.filter((ele) => ele != value);
    } else {
      newCity.push(value);
    }

    setCity(newCity);
  };

  const handleCluster = (e) => {
    const { value } = e.target;

    let newCluster = [...cluster];

    if (newCluster.includes(value)) {
      newCluster = newCluster.filter((ele) => ele != value);
    } else {
      newCluster.push(value);
    }

    setCluster(newCluster);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleLimit = (e) => {
    // console.log(e.target.value);
    setLimit(e.target.value);
  }

  useEffect(() => {
    let paramObj = {
      city,
      cluster
    };

    {
      query && (paramObj.query = query);
    }

    {
      limit != 12345 && (paramObj.limit = limit);
    }

    setSearchParams(paramObj);
  }, [city, cluster, query, limit]);

  return (


    <DIV>

      <div className="main">
        <input
          type="text"
          placeholder="Search Items..."
          value={query}
          onChange={(e) => {
            handleSearch(e);
          }}
        />

        <h4>Filter by City</h4>
        <div>
          <input
            type="checkbox"
            value={"Delhi"}
            onChange={handleCity}
            checked={city.includes("Delhi")}
          />
          <label>Delhi</label>
          <br />
          <input
            type="checkbox"
            value={"Chennai"}
            onChange={handleCity}
            checked={city.includes("Chennai")}
          />
          <label>Chennai</label>
          <br />
          <input
            type="checkbox"
            value={"Indore"}
            onChange={handleCity}
            checked={city.includes("Indore")}
          />
          <label>Indore</label>
          <br />
          <input
            type="checkbox"
            value={"Bangalore"}
            onChange={handleCity}
            checked={city.includes("Bangalore")}
          />
          <label>Bangalore</label>
          <br />
          <input
            type="checkbox"
            value={"Mumbai"}
            onChange={handleCity}
            checked={city.includes("Mumbai")}
          />
          <label>Mumbai</label>
          <br />
          <input
            type="checkbox"
            value={"Guwahati"}
            onChange={handleCity}
            checked={city.includes("Guwahati")}
          />
          <label>Guwahati</label>
          <br />
        </div>
        <br />
        <br />

        <h4>Filter by Cluster</h4>
        <div>
          <input
            type="checkbox"
            value={"cluster-a-32"}
            onChange={handleCluster}
            checked={cluster.includes("cluster-a-32")}
          />
          <label>cluster-a-32</label>
          <br />
          <input
            type="checkbox"
            value={"cluster-a-1"}
            onChange={handleCluster}
            checked={cluster.includes("cluster-a-1")}
          />
          <label>cluster-a-1</label>
          <br />
          <input
            type="checkbox"
            value={"cluster-a-21"}
            onChange={handleCluster}
            checked={cluster.includes("cluster-a-21")}
          />
          <label>cluster-a-21</label>
          <br />
          <input
            type="checkbox"
            value={"cluster-a-2"}
            onChange={handleCluster}
            checked={cluster.includes("cluster-a-2")}
          />
          <label>cluster-a-2</label>
          <br />
          <input
            type="checkbox"
            value={"cluster-v-2"}
            onChange={handleCluster}
            checked={cluster.includes("cluster-v-2")}
          />
          <label>cluster-v-2</label>
          <br />
        </div>

        <h4>Space Available Limit</h4>
        <div className="range-div">
          <input type="range" name="volume" min="0" max="12345" value={limit} onInput={handleLimit} id="range-slider" />
          <label for="volume">{limit}</label>
        </div>
      </div>
    </DIV>
  );
};

export default Sidebar;

const DIV = styled.div`
  border-right: 1px solid gray;

  label {
    margin-left: 0.4rem;
  }

  input {
    padding: 0.4rem 1rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
    margin-bottom: 0.5rem;
  }

  .range-div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.5rem;
    /* height: 5rem; */
  }

  .range-div > label:first-child {
    margin: 0;
    margin-right: 0.4rem;
  }

  #range-slider {
    padding: 0;
    margin: 0;
  }
 
  
`;
