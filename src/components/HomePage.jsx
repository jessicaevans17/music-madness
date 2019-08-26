import React, { Component } from "react"
import { Link } from "react-router-dom"

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>Home</h1>
        <main>
          <section className="band">
            <Link to="/father-john-misty" className="home-link">
              Father John Misty
            </Link>
            <p>
              Joshua Michael Tillman (born May 3, 1981), also known as Father
              John Misty and previously J. Tillman, is an American
              singer-songwriter, musician, and record producer.
            </p>
          </section>
          <section className="band">
            <Link to="/modest-mouse" className="home-link">
              Modest Mouse
            </Link>
            <p>
              Modest Mouse is an American rock band formed in 1992 in Issaquah,
              Washington (a suburb of Seattle) and currently based in Portland,
              Oregon. The founding members of this group are lead
              singer/guitarist Isaac Brock, drummer Jeremiah Green, and bassist
              Eric Judy.
            </p>
          </section>
          <section className="band">
            <Link to="dr-dog" className="home-link">
              Dr. Dog
            </Link>
            <p>
              Dr. Dog is an American rock band based in Philadelphia,
              Pennsylvania, United States. Its lineup consists of Toby Leaman
              (bass guitar), Scott McMicken (lead guitar), Frank McElroy (rhythm
              guitar), Zach Miller (keyboard), and Eric Slick (drums).
            </p>
          </section>
        </main>
      </div>
    )
  }
}

export default HomePage
