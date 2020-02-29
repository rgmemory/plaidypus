import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";

function App() {
  const [input, setInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  let updateInput = userInput => {
    setInput(userInput);
  };

  let submitSearch = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${input}&location=naperville&limit=5&Authorization`,
        {
          headers: {
            Authorization:
              "Bearer Ca0IPLcsv_jngqq-_DvXn4pP39KJYI-8sFLLMqrw2cBKsKQi7d0n6YUTu-cfpzP5aL6ZpSJ18OfBcWfkfgZFHaJFapQau80GvVFi4QiHEY9fThXF_ft7RuQaJbNZXnYx"
          }
        }
      )
      .then(res => {
        setRestaurants(res.data.businesses);
      });
    setInput(input);
  };

  let formattedRestaurants = restaurants.map(restaurant => {
    return (
      <Link
        to={`result/${restaurant.id}`}
        key={restaurant.id}
        style={{
          width: "80%",
          cursor: "pointer",
          border: "solid gray .5px",
          borderRadius: 5,
          padding: 10,
          marginBottom: 15,
          textDecoration: "none",
          fontSize: 20,
          color: "black",
          fontFamily: "Verdana",
          boxShadow: "5px 5px 8px -4.5px #888888"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "85%"
          }}
        >
          <img
            src={restaurant.image_url}
            alt=""
            style={{
              height: 150,
              width: 150,
              minHeight: 150,
              minWidth: 150,
              borderRadius: 5
            }}
          ></img>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: 450
            }}
          >
            <strong
              style={{
                fontSize: 30,
                color: "black",
                marginBottom: 13
              }}
            >
              {restaurant.name}
            </strong>
            <div style={{ color: "gray" }}>
              <div
                style={{ marginBottom: 13 }}
              >{`${restaurant.location.address1}, ${restaurant.location.city}`}</div>
              <div style={{ marginBottom: 13 }}>{restaurant.display_phone}</div>
              <div
                style={{ marginBottom: 13 }}
              >{`${restaurant.rating}/5 Stars`}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          fontSize: 50,
          fontFamily: "Verdana",
          marginBottom: 20,
          marginTop: 20
        }}
      >
        Experience Naperville!
      </div>

      <input
        onChange={e => updateInput(e.target.value)}
        style={{
          width: 300,
          height: 20,
          borderRadius: 2,
          marginBottom: 20,
          outline: 0
        }}
      ></input>
      <button
        onClick={submitSearch}
        style={{
          width: 300,
          height: 30,
          borderRadius: 9,
          cursor: "pointer",
          fontSize: 20,
          backgroundColor: "lightgray",
          marginBottom: 20,
          outline: 0
        }}
      >
        Search
      </button>
      {formattedRestaurants}
    </div>
  );
}

export default App;
