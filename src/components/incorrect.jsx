import React, { Component } from "react";
import incorrect from "../assets/incorrect.gif";
import { Button } from "antd";

class Incorrect extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className=" shadow p-2 mb-4 bg-white">
            <img src={incorrect} alt="" width="200" height="200" />

            <h1 className="text-danger">Your Answer is wrong!</h1>
            <h5 className=" m-2">{this.props.question}</h5>
            <h5 className="text-success">
              The correct answer is
              <span className="text-info">
                &apos; {this.props.correctAnswer} &apos;
              </span>
            </h5>
            <h3 className="lead">Your Score is {this.props.score}</h3>

            <Button className=" m-5" type="danger" onClick={this.props.restart}>
              Restart
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Incorrect;
