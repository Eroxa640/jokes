import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Joke from "./components/Joke/Joke";

export default class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    let res = [];
    for (let i = 0; i < 5; i++) {
      res.push(
        fetch("https://api.chucknorris.io/jokes/random") // можно вынести в отдельную функцию как мы делали на занятии
          .then((response) => response.json())
      )
    }
    Promise.all(res).then(jokes => {
      const data = jokes.map(joke => joke.value)
      this.setState({ data });
    })


  }
  render() {
    // console.log('[app]render', this.state.data);
    return (
      <div className="container">
        <div className="con__info">
          <Button />
          <div className="list">
            {
              this.state.data.map(item => {
                console.log(item);
                return <Joke
                  key={item}
                  joke={item}
                />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
