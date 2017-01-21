import React, { Component } from 'react';

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { link }  = this.props;

    return (
        <li className="links--item">
          <a className="links--link" href={ link.url } target="_blank">{ link.name }</a>
        </li>
    )
  }
}

export default Link;
