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
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((posts) => {
          res.push(posts.value);
          // const updatePosts = posts.map(post => {
          //   return {
          //     ...post,
          //   }
          // })
          // this.setState({data: updatePosts})
        });
    }
    this.setState({data: res })
    // Promise.all(res).then(data => {
    //   console.log(data);
    //   this.setState({data })
    // })
    
    
  }
  render() {
    console.log('[app]render', this.state.data);
    return (
      <div className="container">
        <div className="con__info">
          <Button />
          <div className="list">
            {
              this.state.data.map(item => {
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
