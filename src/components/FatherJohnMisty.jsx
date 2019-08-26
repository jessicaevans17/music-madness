import React, { Component } from "react"
import fjm from "../images/fatherjohnmisty.jpeg"

export class TheNational extends Component {
  render() {
    return (
      <div className="band-page">
        <header>
          <h1>Father John Misty</h1>
        </header>
        <main className="main-band-page">
          <img src={fjm}></img>
          <h2 className="newest-album">
            Latest Album: <span>God's Favorite Customer (2018)</span>
          </h2>
        </main>
      </div>
    )
  }
}

export default TheNational
