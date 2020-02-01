import React, { Component } from "react";
import { Button, Radio } from "antd";
import "antd/dist/antd.css";

class Question extends Component {
  state = {
    loading: this.props.loading,
    iconLoading: this.props.iconLoading,
    currentAnswer: this.props.option[0],
    userAnswer: "",
    showComponent: false,
    trueAnswer: false
  };

  enterLoading = () => {
    //this.setState({ loading: true });
    this.props.clicked();
  };

  enterIconLoading = () => {
    //this.setState({ iconLoading: true });
  };

  onChange = e => {
    const userAnswer = e.target.value;
    this.setState({ userAnswer: userAnswer });
    this.props.selectedAnswer(userAnswer);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row text-center h5 ">
          {/* shadow p-2 mb-4 bg-white */}
          <div className="col-6">
            <span className="badge badge-primary">
              Question {this.props.currentQuestion} of 10
            </span>
          </div>

          <div className="col-6">
            <span className="badge badge-info text-capitalize">
              Category :
              {(() => {
                switch (String(this.props.category)) {
                  case "9":
                    return " general";
                  case "18":
                    return " computers";
                  case "12":
                    return " music";
                  default:
                    return " computers";
                }
              })()}
            </span>
          </div>
        </div>

        <div className="row text-center h5">
          <div className="col-6">
            <span className="badge badge-primary">
              Your Score is {this.props.score}
            </span>
          </div>
          <div className="col-6">
            <span className="badge badge-info text-capitalize">
              Difficulty: {this.props.difficulty}
            </span>
          </div>
        </div>

        <div className="m-4 text-center h3">
          {this.props.showTextWithSpecialCharacters(this.props.question)}
        </div>

        <div className="text-center" style={{ marginTop: 16 }}>
          <Radio.Group
            onChange={this.onChange}
            //defaultValue={this.props.option[0]}
            buttonStyle="solid"
          >
            <h5>
              <Radio.Button key="0" value={this.props.option[0]}>
                {this.props.showTextWithSpecialCharacters(this.props.option[0])}
              </Radio.Button>
            </h5>
            <h5>
              <Radio.Button key="1" value={this.props.option[1]}>
                {this.props.showTextWithSpecialCharacters(this.props.option[1])}
              </Radio.Button>
            </h5>
            <h5>
              <Radio.Button key="2" value={this.props.option[2]}>
                {this.props.showTextWithSpecialCharacters(this.props.option[2])}
              </Radio.Button>
            </h5>
            <h5>
              <Radio.Button key="3" value={this.props.option[3]}>
                {this.props.showTextWithSpecialCharacters(this.props.option[3])}
              </Radio.Button>
            </h5>
          </Radio.Group>
        </div>
        <div>
          {this.state.userAnswer === "" ? null : (
            <Button
              className="m-3 h6 "
              type="primary"
              loading={this.state.loading}
              onClick={this.enterLoading}
            >
              Check The Answer
            </Button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Question;
