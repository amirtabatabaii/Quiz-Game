import React, { Component } from "react";
import Trivia from "./components/trivia";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    difficulty: "medium",
    category: "18",
    showApp: true,
    showTrivia: false,
    myApi: `https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`
  };

  onClick = () => {
    const { showApp, showTrivia } = this.state;
    this.setState({ showApp: !showApp, showTrivia: !showTrivia });
  };

  difficultyOnChange = e => {
    this.setState({
      difficulty: e.target.value
    });
  };

  categoryOnChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showApp ? (
          <Home
            difficultyOnChange={this.difficultyOnChange}
            categoryOnChange={this.categoryOnChange}
            onClick={this.onClick}
          />
        ) : (
          <Trivia
            myApi={`https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`}
            category={this.state.category}
            difficulty={this.state.difficulty}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
