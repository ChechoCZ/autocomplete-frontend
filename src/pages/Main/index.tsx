import React, { Component, Fragment } from 'react';

import Navbar from '../../components/Navbar';
import AutoComplete from '../../components/AutoComplete';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <AutoComplete />
      </Fragment>
    );
  }
}
