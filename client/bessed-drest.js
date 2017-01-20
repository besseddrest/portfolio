// React & Redux
import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// CSS
import css from './styles/app.scss';
import projects from './data/projects';

class Main extends Component {
  render() {
    return (
      <section>
        <h1>Harold's Online Portfolio</h1>
        <p>I'm a Front-end Engineer, cyclist, DJ, and funny guy. I make YouTube vids.</p>
        <p>
          <date>01/19/17</date><br />
          I've generally never had time to work on my portfolio, but people keep asking for one so, stay tuned for something more-awesomer. In the meantime, here are some links:
        </p>
        <ul>
          <li><a href="https://github.com/besseddrest" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/hcabalic" target="_blank">LinkedIn</a></li>
          <li><a href="https://www.youtube.com/channel/UC-4GIoE6rXE9fALp21x96tQ" target="_blank">YouTube</a></li>
          <li><a href="http://besseddrest.tumblr.com/" target="_blank">tumblr</a></li>
          <li>
            <strong>Projects/Demos</strong>
            <ul>
              <li>
                <a href="http://lowbicycles.com/" target="_blank">LOW// Bicycles</a><br />
                <small>Handmade Aluminum Bicycle Frames in San Francisco</small>
              </li>
              <li>
                <a href="http://dcsuperchargers.com/" target="_blank">Danny Coyle's Super Chargers</a><br />
                <small>The Greatest Chargers Bar Ever</small>
              </li>
              <li>
                <a href="http://www.squaretrade.com/" target="_blank">SquareTrade</a><br />
                <small>I was a Front-End Engineer at SquareTrade from 2011-2017</small>
              </li>
              <li>
                <a href="https://github.com/besseddrest/hoodline-blog" target="_blank">Hoodline Blog</a><br />
                <small>Re-creating the Hoodline Blog using React/Redux</small>
              </li>
              <li>
                <a href="http://besseddrest.com/todo" target="_blank">ToDo App</a><br />
                <small>A simple ToDo app built with native JS and Sass</small>
              </li>
              <li>
                <a href="http://besseddrest.com/lightbox" target="_blank">Lightbox App</a><br />
                <small>A simple Lightbox example built with native JS and Sass</small>
              </li>
              <li>
                <a href="https://github.com/besseddrest/tic-tac-toe" target="_blank">TicTacToe App</a><br />
                <small>My first app in React</small>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    )
  }
}

render(<Main />, document.getElementById('app'));
