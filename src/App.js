import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Introduction from './components/Intro'
import About from './components/About'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar />
				  <div id="colorlib-main">
					  <Introduction></Introduction>
					  <About></About>
					  <Timeline></Timeline>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
