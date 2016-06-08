import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import Header from './main-header';
import Banner from './../components/banner.jsx';
import HomePage from './../components/home-page.jsx';

const composer = ({}, onData) => {
  const header = React.createElement(Header)
  const banner = React.createElement(Banner)

  onData(null, {header,banner})
}

export default composeAll(
  compose(composer),
  useDeps()
)(HomePage);