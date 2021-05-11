import React, { Component } from 'react'

export default class EmptyEntry extends Component {
    render() {    
        return (
            <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none"></div>
                </div>
            </article>
        )
    }
}
