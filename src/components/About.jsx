import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                            <span className="heading-meta">About Us</span>
                            <h2 className="colorlib-heading">Who Am I?</h2>
                            <p>I am a computer graduate who is currently working as senior software engineer in Mobisoft, Pune </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Server and services Development </h3>
                    <p>I have experience building websites and some iot services</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Technical Skills</h3>
                    <p>Elixir, Erlang, Golang, Ptyhon, Typescript, SQL, HTML, React</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Education</h3>
                    <p>Master in Computer Science</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}