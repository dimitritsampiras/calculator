import React from 'react';
import Display from './Display';
import Pannel from './Pannel';
import './styles/Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      equation: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( calculate(this.state, e.target.value + ''));
    console.log("Equation: " + this.state.equation);
    console.log("Display: " + this.state.display);
  }

  render() {
    return(
      <div className="calculator">
        <Display value={this.state.display || "0"}/>
        <Pannel onClick={(e) => this.handleClick(e)}/>
      </div>
    )
  }
};
