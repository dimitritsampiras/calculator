import React from "react";
import './styles/Button.css'

export default function Button({ buttonType, symbol, onClick }) {
  return (
    <button className={buttonType} value={symbol} onClick={onClick}>
      {symbol}
    </button>
  );
}
