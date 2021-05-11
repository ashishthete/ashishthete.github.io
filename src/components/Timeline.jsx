import React, { Component } from 'react'

import Entry from './Entry';
import EmptyEntry from './EmptyEntry';

export default class Timeline extends Component {
  constructor() {
    super()
    this.timelineEntries = [
      {
        "title": "Senior Software Engineer",
        "time": "2020-present (Mobisoft Infotech)",
        "description": "I recently have joined the Mobisoft Infotech as a Senior Software Engineer. My major part of the work has been into the field of developing backend server using golang."
      },
      {
        "title": "Senior Software Engineer",
        "time": "2014-2010 (KOPERA)",
        "description": "I joined kopera as Intern in Jan 14. Where i worked on multiple technology stack. Majorly i am part of development on domains like Embedded Systems, Health Care systems, IOT Devices, WEBRTC, high-end audio and video systems, camera systems, conferencing system, smart house solution etc ."
      },
      {
        "title": "Master In Computer science",
        "time": "2012 - 2014",
        "description": "I have pursued my post graduation in Computer science from Modern College, Pune."
      },
      {
        "title": "Bachelor In Computer Science",
        "time": "2009 - 2012",
        "description": "I Completed my graduation in computer science from Padmashri Vikhe Patil College, Pravaranagar."
      }
    ];

    this.colours = [
      'color-2',
      'color-3',
      'color-4'
    ];
    console.log(this.colours[0 % 3]);
    console.log(this.colours[1 % 3]);
    console.log(this.colours[2 % 3]);
    console.log(this.colours[3 % 3]);
  }


  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {this.timelineEntries.map((value, index) => {
                    return <Entry key={index} entry={value} colour={this.colours[index % 3]}/>
                  })}
                  <EmptyEntry/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}