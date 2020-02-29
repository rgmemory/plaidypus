import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

export default function Result(props) {
  const [restaurant, setRestaurant] = useState({});
  const [photos, setPhotos] = useState([]);
  const [address, setAddress] = useState({});
  const [hours, setHours] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${props.match.params.id}`,
        {
          headers: {
            Authorization:
              "Bearer Ca0IPLcsv_jngqq-_DvXn4pP39KJYI-8sFLLMqrw2cBKsKQi7d0n6YUTu-cfpzP5aL6ZpSJ18OfBcWfkfgZFHaJFapQau80GvVFi4QiHEY9fThXF_ft7RuQaJbNZXnYx"
          }
        }
      )
      .then(res => {
        setRestaurant(res.data);
        setPhotos(res.data.photos);
        setAddress(res.data.location);
        setHours(res.data.hours[0].open);
      });
  }, [props.match.params.id]);

  let renderPhotos = photos.map(photo => {
    return (
      <img
        alt=""
        key={photo}
        src={photo}
        style={{
          height: 300,
          width: 300,
          minHeight: 300,
          minWidth: 300,
          borderRadius: 8
        }}
      ></img>
    );
  });

  let formatHours = hours.map((day, index) => {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    return { day: days[index], opens: day.start, closes: day.end };
  });

  let renderHours = formatHours.map(day => {
    return <div>{` ${day.day}: ${day.opens} - ${day.closes} `}</div>;
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
          marginTop: 20,
          textDecoration: "none"
        }}
      >
        Experience Naperville!
      </div>

      <div
        style={{
          width: "80%",
          border: "solid gray .5px",
          borderRadius: 5,
          padding: 20,
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
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20
          }}
        >
          {renderPhotos}
        </div>
        <div
          style={{
            fontSize: 40,
            color: "black",
            marginBottom: 13
          }}
        >
          {restaurant.name}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div style={{ width: 450 }}>
            <div
              style={{
                marginBottom: 13
              }}
            >
              {`${address.address1}, ${address.city}`}
            </div>
            <div
              style={{
                marginBottom: 13
              }}
            >
              {restaurant.display_phone}
            </div>
            <div
              style={{
                marginBottom: 13
              }}
            >{`${restaurant.rating}/5 Stars`}</div>
            <div
              style={{
                marginBottom: 13
              }}
            >
              <div
                style={{
                  marginBottom: 13
                }}
              >{`${restaurant.review_count} Reviews`}</div>
              {restaurant.price}
            </div>
          </div>
          <div style={{ width: 450 }}>
            <div
              style={{
                marginBottom: 13
              }}
            >
              {renderHours}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
