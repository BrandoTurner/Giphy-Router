import React from "react"

const Home = () => {
    return(
    <div className="home">
      <div>
        <h1>
           Giphy Generator
        </h1>
      </div>
      <section className="flip-card">
        <div className="inner">
          <div className="front">
		  <iframe src="https://giphy.com/embed/3o6gbbuLW76jkt8vIc" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thisisgiphy-3o6gbbuLW76jkt8vIc">via GIPHY</a></p>
          </div>
        </div>
      </section>
    </div>
    )
}
export default Home;