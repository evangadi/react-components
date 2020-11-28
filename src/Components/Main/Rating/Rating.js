import React, { Component } from "react";

class Rating extends Component {

  constructor(){
    super();
     this.state = {
      value: 5,
    };   
  }

  // Not that we are using an arrow function in here
  // If we just use the standard function, we will need to bind the finction inside our constructor. The arrow function does the binding for us automatically 

  increment = () => {
    // This works, but it is prone to error
    // During times where React doesn't imidiatelly accept the request of this function, it wouldn't work  
    
      // this.setState({
      //   value: this.state.value + 1
      // });


    // To check that this one fails, lets write something that should be dependent on the updated value 

      // this.setState({
      //   value: this.state.value + 1
      // });

      // this.setState({
      //   value: this.state.value - 1
      // });

    // If we use an updater function to pass the current state instead, it will work

      // this.setState((prevState) => {
      //   return {
      //     value: prevState.value + 1,
      //   };
      // });

      // this.setState((state) => {
      //   return {
      //     value: state.value - 2,
      //   };
      // });

    // For the purpose of our example, lets just make the increment function arr the rating by one 
      this.setState((state) => {
        return {
          value: state.value + 1,
        };
      });
  };
  decrement = () => {

    // The same thing for our decrement function 
    // Lets make it so that it decreases the rating by 1 
    this.setState((state) => {
        return {
          value: state.value - 1,
        };
      });
    };

  render() {
    // Conditional rendering in React 
    let initialText = "Average rating:";
    let changedText = "You rated this product:"
    let displayText = ""; 

    let counter = 1; 

    if(this.state.value != 5){
      counter = counter + 1; 
    }

    if(counter >= 2){
      displayText = changedText;
    }else{
      displayText = initialText; 
    }
    return (
      <div className="rating-wrapper">
        <h3>Please rate this mac out of 10</h3> 
        <div>
          <button className="postive" onClick={this.increment}> Rate up </button>
          <button className="negative" onClick={this.decrement}> Rate down </button>
          <div className="rating-result"> {displayText} {this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default Rating;