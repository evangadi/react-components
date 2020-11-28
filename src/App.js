import React, { Component } from "react";
// import logo from "./logo.svg";

import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// import "./App.css";

import "./css/bootstrap.css";
import "./css/styles.css";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
