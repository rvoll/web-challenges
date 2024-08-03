import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={8} valueB={12} />;
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}
