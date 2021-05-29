import React from 'react';
import ReactDOM from 'react-dom';
import { Windmill } from '@windmill/react-ui';
import './css/main.min.css';

import { App } from './App';

ReactDOM.render(
  <Windmill><App /></Windmill>,
  document.getElementById('root')
);
