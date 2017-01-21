import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item }  = this.props,
          url = <a href={ item.url } target="_blank">demo</a>,
          github = <a href={ item.github } target="_blank">github</a>,
          path = require(`../images/${ item.thumb }.jpg`);
          
    return (
      <div className="project">
        <img className="project--thumb" src={ path } />
        <div className="project--details">
          <h3 className="project--name">{ item.name }</h3>
          <small className="project--short-desc">{ item.shortDesc }</small>
          <small className="project--links">{ url } { github }</small>
        </div>
      </div>
    )
  }
}

export default Project;
