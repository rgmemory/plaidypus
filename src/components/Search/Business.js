import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Business(props) {
  let { restaurant } = props;

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
}
