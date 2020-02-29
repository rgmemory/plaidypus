import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import Business from "./Business";

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
    return <Business restaurant={restaurant} />;
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
