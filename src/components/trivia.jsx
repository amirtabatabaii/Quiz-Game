import React, { Component } from "react";
import axios from "axios";
import Question from "./question";
import Correct from "./correct";
import Incorrect from "./incorrect";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      score: 0,
      data: [],
      currentQuestion: 1,
      correct: "",
      incorrect: [],
      randomAnswer: [],
      selectedAnswer: "",
      ifTrueAnswer: null,
      showQst: true
    };
  }

  async componentDidMount() {
    //const { questionIndex } = this.state;
    await axios.get(this.props.myApi).then(Response => {
      this.setState({
        data: Response.data.results
      });
    });

    console.log("data 0", this.state.data);

    this.getRandomAnswer(this.state.questionIndex);
  }

  getRandomAnswer = num => {
    const { data } = this.state;
    const correctAns = data[num].correct_answer;
    const incorrectAns = data[num].incorrect_answers;

    incorrectAns.push(correctAns);
    this.setState({
      correct: correctAns,
      incorrect: incorrectAns,
      randomAnswer: incorrectAns
    });
  };

  getQuestion(questionIndex) {
    const { data } = this.state;
    if (data.length === 0) return "[Data is not ready]";
    let res = data[questionIndex].question;
    return res;
  }

  getRandomOption(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  handleTrueAnswer = userAnswer => {
    this.setState({
      selectedAnswer: userAnswer
    });
  };

  handleOnClick = () => {
    this.setState({
      ifTrueAnswer:
        this.state.selectedAnswer === this.state.correct ? true : false,
      showQst: false
    });
  };

  handleRestart = () => {
    this.setState({
      questionIndex: 0,
      score: 0,
      data: [],
      currentQuestion: 1,
      correct: "",
      incorrect: [],
      randomAnswer: [],
      selectedAnswer: "",
      ifTrueAnswer: null,
      showQst: null
    });
    window.location.reload();
  };

  handleNextQuestion = () => {
    const qstIndx = this.state.questionIndex + 1;

    const correctAns = this.state.data[qstIndx].correct_answer;
    const incorrectAns = this.state.data[qstIndx].incorrect_answers;
    incorrectAns.push(correctAns);
    const answers = this.getRandomOption(incorrectAns);

    this.setState({
      questionIndex: this.state.questionIndex + 1,
      score: this.state.score + 100,
      //     data:
      currentQuestion: this.state.currentQuestion + 1,
      correct: correctAns,
      incorrect: incorrectAns,
      randomAnswer: answers,
      selectedAnswer: "",
      ifTrueAnswer: null,
      showQst: true
    });
  };

  showTextWithSpecialCharacters(text) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(
      `<!doctype html><body>${text}`,
      "text/html"
    ).body.textContent;
    return decodedString;
  }

  render() {
    const { currentQuestion, questionIndex, randomAnswer, score } = this.state;
    return (
      <React.Fragment>
        <div className=" text-center">
          <div className="container text-center">
            <header className="p-3">
              <h2 className="text-danger"> Trivia Game </h2>
            </header>
          </div>
          {this.state.showQst ? (
            <div className="m-5 shadow p-4 mb-4 bg-white">
              <Question
                option={randomAnswer}
                currentQuestion={currentQuestion}
                score={score}
                selectedAnswer={this.handleTrueAnswer}
                question={this.getQuestion(questionIndex)}
                clicked={this.handleOnClick}
                category={this.props.category}
                difficulty={this.props.difficulty}
                loading={this.state.btnLoading}
                iconLoading={this.state.btnLoading}
                showTextWithSpecialCharacters={
                  this.showTextWithSpecialCharacters
                }
              />
            </div>
          ) : null}

          {this.state.ifTrueAnswer === true ? (
            <Correct
              nextQuestion={this.handleNextQuestion}
              score={this.state.score + 100}
              currentQuestion={this.state.currentQuestion}
              restart={this.handleRestart}
            />
          ) : this.state.ifTrueAnswer === false ? (
            <Incorrect
              score={this.state.score}
              correctAnswer={this.showTextWithSpecialCharacters(
                this.state.correct
              )}
              question={this.showTextWithSpecialCharacters(
                this.getQuestion(questionIndex)
              )}
              restart={this.handleRestart}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Quiz;
