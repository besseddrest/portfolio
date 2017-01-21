// React & Redux
import React, { Component } from 'react';
import {render} from 'react-dom';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// CSS
import css from './styles/app.scss';

// data
import projects from './data/projects';
import constants from './data/constants';

// Components
import Project from './components/Project';
import Link from './components/Link';

class Main extends Component {
  constructor() {
    super();

    this.projects = projects;
    this.constants = constants;
  }

  renderProject(item, i) {
    const props = { item, i, key:i };

    return (<Project {...props} />)
  }

  renderLink(link, i) {
    const props = { link, i, key: i };

    return (<Link {...props} />);
  }

  render() {
    const allProjects = this.projects.map((item, i) => this.renderProject(item, i));
    const links = constants.links.map((link, i) => this.renderLink(link, i));
    return (
      <section>
        <h1 className="section--header section--header__h1">
          { constants.name }
          <small className="section--header__sub">{ constants.desc }</small>
        </h1>

        <p>
          <date>{ constants.update.date }</date><br />
          { constants.update.copy }
        </p>

        <section className="links">
          <h2 className="section--header section--header__h2">{ constants.linksHeader }</h2>
          <ul className="links--list">
            { links }
          </ul>
        </section>

        <section>
          <h2 className="section--header section--header__h2">{ constants.projectsHeader }</h2>
          <div className="projects">
            { allProjects }
          </div>
        </section>
      </section>
    )
  }
}

render(<Main />, document.getElementById('app'));
