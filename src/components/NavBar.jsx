import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {
  render() {
    return (
      <nav>
        <section>
          <Link to="/">Home</Link>
        </section>
        <section>
          <Link to="/father-john-misty">Father John Misty</Link>
        </section>
        <section>
          <Link to="/modest-mouse">Modest Mouse</Link>
        </section>
        <section>
          <Link to="dr-dog">Dr. Dog</Link>
        </section>
      </nav>
    )
  }
}

export default NavBar
