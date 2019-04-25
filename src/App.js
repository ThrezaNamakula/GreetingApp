import React, { Component } from "react";
import Greetings from "./Greetings";
import "./App.css" 
 
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "home",
            name:""
        }
        this.goToPage = this.goToPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    goToPage(page) {
        this.setState({currentPage: page});
    }
    handleChange = event => {
        this.setState({ username: event.target.value });
      };
     
  render() {
    if (this.state.currentPage === "home") 
       
    return (
      <div className="greetingsMain">
        <div className="header">
          <form onSubmit = {() => this.goToPage("greetings")}>
            <input placeholder="Type your name here"name="username"
                  value={this.state.username}
                  onChange={this.handleChange}>
            </input>
            <button type="submit">Open</button>
          </form>
        </div>
      </div>
    );
    else if (this.state.currentPage === "greetings") {
        return <Greetings name={this.state.username} gotoPage={this.goToPage}/>

    }
  }
}
 
export default App;