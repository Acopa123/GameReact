import React, {Component} from 'react';
import './game.css';
class Square extends Component{
  constructor(){
    super();
    this.state = {
      value: null,
    };
  }
    render(){
        return (
            <button onClick={() => this.props.onClick()} className="square">
                {this.props.value}
            </button>
        );
    }
}

export default Square;
