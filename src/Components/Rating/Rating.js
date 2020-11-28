import React, { Component } from "react";

class Rating extends Component {

  constructor(){
    super();
     this.state = {
      value: 0,
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
      // this.setState((state) => {
      //   return {
      //     value: state.value + 1,
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
    return (
      <div>
        <h2>Rating block</h2> 
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Your rated this product : {this.state.value}</div>
      </div>
    );
  }
}

export default Rating;