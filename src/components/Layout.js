import React, { Component, useLayoutEffect } from 'react';

class Layout extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
        <h2>React Redux Router</h2>
      </div>
    );
  }
}

export default Layout;
