'use strict';

import React from 'react';
import { render as reactDomRender } from 'react-dom';
import App from './app/app';

const container = document.createElement('div');
document.body.appendChild(container);
reactDomRender(<App />, container);
