import React from "react";
import "./styles.css";
export default function ScotchInfoBar(Props) {
  let twitter = `https://twitter.com/${Props.user.twitterUsername}`;
  return (
    <div
      style={{
        position: "relative",
        top: "0",
        left: "0",
        right: "0",
        fontSize: "14px",
        padding: "20px 10px",
        background: "#333",
        color: "#bbb",
        letterSpacing: "0.5px",
        overflow: "scroll"
      }}
    >
      <div>
        <div className="user-deets">
          <img src={Props.user.avatar} alt={Props.user.name}></img>
          <h3>
            <a href={twitter}>{Props.user.name}</a>
          </h3>
          <Labels label="location">{Props.user.location}</Labels>
          <Labels label="eats">{Props.user.foodType}</Labels>
          <Labels label="age">{Props.user.age}</Labels>
          <Labels label="likes">{Props.user.likes}</Labels>
          <Labels label="twitter">
            <a href={twitter}>@{Props.user.twitterUsername}</a>
          </Labels>
        </div>
      </div>
    </div>
  );
}

function Labels(Props) {
  return (
    <div
      style={{
        marginTop: 12
      }}
    >
      <strong>{Props.label}</strong>
      <span
        style={{
          fontSize: 20
        }}
      >
        {Props.children}
      </span>
    </div>
  );
}
