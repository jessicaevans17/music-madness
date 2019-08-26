import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import HomePage from "./components/HomePage"
import FatherJohnMisty from "./components/FatherJohnMisty"
import ModestMouse from "./components/ModestMouse"
import DrDog from "./components/DrDog"
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            exact
            path="/father-john-misty"
            component={FatherJohnMisty}
          ></Route>
          <Route exact path="/modest-mouse" component={ModestMouse}></Route>
          <Route exact path="/dr-dog" component={DrDog}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
