import React from "react";
import "./styles/Display.css";

export default function Display({ value }) {
  return (
    <div className="display">
      {value}
    </div>
  );
}
