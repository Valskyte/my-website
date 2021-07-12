import React from "react"
import "../styles/comingsoon.css"

export default function Home() {
  return (
    <section className="container">
      <header>
        <h1>Aide Valskyte -</h1>
      </header>
      <main>
      <p>
        UI/UX Designer utilising diverse work experience and expertise to build
        digital products that people love. Addressing business objectives while
        advocating for users. Currently living in Austria.
      </p>

      <h2>
        project case studies - <span className="italic">COMING SOON</span>
      </h2>
      </main>
      <footer>
      <p className="connect">
        {" "}
        <a href="mailto:aide.valskyte@gmail.com">aide.valskyte@gmail.com</a>
      </p>
      <p >
        {" "}
        <a className="connect"
          href="https://www.linkedin.com/in/aide-valskyte-a5112918/"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
       </footer>
    </section>
  )
}
