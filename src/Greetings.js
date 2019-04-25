import React, { Component } from "react";
import "./Greeting.css";

 
class Greetings extends Component {
   
        constructor(props) {
          super(props);
          this.state = {
                date: '',
                
          };
          
        }
        componentDidMount() {
         
           
          var hours = new Date().getHours(); //Current Hours
          var min = new Date().getMinutes(); //Current Minutes
         
          this.setState({
            //Setting the value of the date time
            date:
              'It is ' + hours + ':' + min + 'hrs',
              hours: hours,
              min: min
              
          });
        }

    getPartOfDay() {
        if (this.state.hours < 12) {
            return "Morning";
        } else if(this.state.hours >= 12) {
            return "Afternoon"
        } else if (this.state.hours > 18){
          return "Evening"
        }
        else if (this.state.hours > 21) {return "Night"}
    }


  render() {
   
       
        return (
      <div className="greetingsMain">
        <div className="header">
          <h1>Good {this.getPartOfDay()} {this.props.name}!</h1>
          <h2>{this.state.date}</h2>
          <p>Enjoy your {this.getPartOfDay()}</p>
          <form  >
            <button type="submit" onClick={() => this.props.gotoPage("home")}>Back</button>
          </form>
        </div>
      </div>
    );
    
  }
}
 
export default Greetings;