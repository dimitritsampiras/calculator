import React from 'react';
import Display from './Display';
import Pannel from './Pannel';
import './styles/Calculator.css';

export default class Calculator extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      stack: ""
    }
  }

  handleClick(e) {
    console.log(e.target.value);
    this.setState({
      total: e.target.value
    })
  }

  render() {
    return(
      <div className="calculator">
        <Display value={this.state.next || this.state.total || "0"}/>
        <Pannel onClick={(e) => this.handleClick(e)}/>
      </div>
    )
  }
};
