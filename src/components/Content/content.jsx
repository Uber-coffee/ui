import React from 'react';
import Unauthorized from './Unauthorized/Unauthorized';
import Authorized from './Authorized/authorized';

const Content = props => {
  props.Check();

  if (props.isAuthorized === false) {
    return <Unauthorized />;
  } else {
    return <Authorized />;
  }
};

export default Content;
