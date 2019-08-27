import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {
  render() {
    return (
      <nav>
        <section>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </section>
        <section>
          <Link to="/father-john-misty" className="nav-link">
            Father John Misty
          </Link>
        </section>
        <section>
          <Link to="/modest-mouse" className="nav-link">
            Modest Mouse
          </Link>
        </section>
        <section>
          <Link to="dr-dog" className="nav-link">
            Dr. Dog
          </Link>
        </section>
      </nav>
    )
  }
}

export default NavBar
