import React, { Component } from "react";
import correct from "../assets/correct.gif";
import { Button } from "antd";

class Correct extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className=" shadow p-2 mb-4 bg-white">
            <img src={correct} alt="" width="200" height="200" />
            <h1 className="text-success">Congratulations!</h1>

            <h3 className="lead">Your Score is {this.props.score}</h3>
            {this.props.currentQuestion === 10 ? (
              <Button
                className=" m-5"
                type="danger"
                onClick={this.props.restart}
              >
                Restart
              </Button>
            ) : this.props.currentQuestion !== 10 ? (
              <Button
                className=" m-5"
                type="bg-success"
                onClick={this.props.nextQuestion}
              >
                Next Question
              </Button>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Correct;
