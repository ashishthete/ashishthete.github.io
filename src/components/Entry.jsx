import React, { Component } from 'react'

export default class Entry extends Component {
    constructor(props) {
        super(props)
        this.entry = props.entry
        this.colour = props.colour
    }
    

    render() {    
        return (
            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-entry-inner">
                <div className={"timeline-icon "+this.colour}>
                    <i className="icon-pen2" />
                </div>
                <div className="timeline-label">
                    <h2>{this.entry.title} <span>{this.entry.time}</span></h2>
                    <p>{this.entry.description}</p>
                </div>
                </div>
            </article>
        )
    }
};
