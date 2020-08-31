import React from 'react';

import classes from './NotFound.module.scss';
import Header from '../UI/Header/Header';
import Subheader from '../UI/Subheader/Subheader';

const notFound = () => (
  <div className={classes.NotFound}>
    <Header>Page not Found</Header>
    <div className={classes.NotFoundSubheader}>
      <Subheader>It looks like we can't find the page you're looking for - click <a href='/'>here</a> to head home</Subheader>
    </div>
  </div>
)

export default notFound;