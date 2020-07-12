import React from 'react';
import Unloged from './Unloged/Unloged';
import Loged from './Loged/Loged';

const Content = props => {
  props.Check();

  if (props.isAuthorized === false) {
    return <Unloged />;
  } else {
    return <Loged />;
  }
};

export default Content;
