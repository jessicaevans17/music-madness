import React, { Component } from "react"
import mm from "../images/modestmouse.jpeg"

class ModestMouse extends Component {
  render() {
    return (
      <div className="band-page">
        <header>
          <h1>Modest Mouse</h1>
        </header>
        <main className="main-band-page">
          <img src={mm} alt="modest mouse" />
          <h2 className="newest-album">
            Latest Album: <span>Strangers to Ourselves (2015)</span>
          </h2>
        </main>
      </div>
    )
  }
}

export default ModestMouse
