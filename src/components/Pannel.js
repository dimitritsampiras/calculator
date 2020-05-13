import React from "react";
import Button from "./Button";
import './styles/Pannel.css'

export default function Pannel(props) {
  return (
    <div className="control-pannel">
      <div className="configs">
        <Button
          buttonType="config"
          symbol="C"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="config"
          symbol="+/-"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="config"
          symbol="%"
          onClick={(e) => props.onClick(e)}
        />
      </div>
      <div className="operations">
        <Button
          buttonType="operator"
          symbol="/"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="operator"
          symbol="*"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="operator"
          symbol="-"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="operator"
          symbol="+"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="operator"
          symbol="="
          onClick={(e) => props.onClick(e)}
        />
      </div>
      <div className="numpad">
        <Button
          buttonType="number"
          symbol="9"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="8"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="7"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="6"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="5"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="4"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="3"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="2"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="1"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="0"
          onClick={(e) => props.onClick(e)}
        />
        <Button
          buttonType="number"
          symbol="."
          onClick={(e) => props.onClick(e)}
        />
      </div>
    </div>
  );
}
