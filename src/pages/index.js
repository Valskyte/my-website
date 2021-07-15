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
          Product designer utilising a diverse skill set and expertise to create
          digital experiences that people love. Addressing business objectives
          while advocating for users. Currently living in Austria.
        </p>

        <h2>project case studies -</h2>
        <h3 className="italic">COMING SOON</h3>
      </main>
      <footer className="connect">
        <p className="link">
          {" "}
          <a
            href="https://www.linkedin.com/in/aide-valskyte-a5112918/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
        <p className="link">
          <a href="https://dribbble.com/aide" target="_blank">
            Dribbble
          </a>
        </p>
        <p className="link">
          {" "}
          <a href="mailto:aide.valskyte@gmail.com">aide.valskyte@gmail.com</a>
        </p>
      </footer>
    </section>
  )
}
