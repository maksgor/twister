import React from 'react';
import ReactDOM from 'react-dom';

import AuthComponent from './view';

const mountNode = window.document.querySelector('#mountPoint');
ReactDOM.render(React.createElement(AuthComponent), mountNode);
