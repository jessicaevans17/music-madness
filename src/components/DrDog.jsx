import React, { Component } from "react"
import dogpic from "../images/drdog.jpeg"

class DrDog extends Component {
  render() {
    return (
      <div className="band-page">
        <header>
          <h1>Dr. Dog</h1>
        </header>
        <main className="main-band-page">
          <img src={dogpic} alt="picture of dr.dog" />
          <h2 className="newest-album">
            Latest Album:<span> Critical Equation (2018)</span>
          </h2>
        </main>
      </div>
    )
  }
}

export default DrDog
