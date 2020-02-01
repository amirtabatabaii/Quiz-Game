import React, { Component } from "react";
import { Button, Radio } from "antd";
import start from "../assets/start.gif";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container py-5 my-5 animate bounceIn">
        <div className="card text-center">
          <div className="card-header  bg-info text-white h3">
            Welcome to Trivia Game
          </div>
          <div className="card-body">
            <img src={start} alt="" width="200" height="200" />
            <h5 className="card-title">Please Select question properties : </h5>
            <div className="card-text">
              <div className="row">
                <div className="col-6 text-primary">
                  <b>Select Difficulty</b>
                  <div style={{ marginTop: 16 }}>
                    <Radio.Group
                      onChange={this.props.difficultyOnChange}
                      defaultValue="medium"
                    >
                      <Radio.Button value="easy">Easy</Radio.Button>
                      <Radio.Button value="medium">Medium</Radio.Button>
                      <Radio.Button value="hard">Hard</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
                <div className="col-6 text-primary">
                  <b>Select Category </b>
                  <div style={{ marginTop: 16 }}>
                    <Radio.Group
                      onChange={this.props.categoryOnChange}
                      defaultValue="18"
                    >
                      <Radio.Button value="9">General</Radio.Button>
                      <Radio.Button value="18">Computers</Radio.Button>
                      <Radio.Button value="12">Music</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <Button onClick={this.props.onClick}>Start Game</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
