import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley humptyIsHappy />;
}

function Smiley({ humptyIsHappy, dumptyIsHappy }) {
  return (
    <div>
      <p>Humpty: {humptyIsHappy ? "🥳" : "😭"}</p>
      <p>Dumpty: {dumptyIsHappy ? "🥳" : "😭"}</p>
    </div>
  );
}
