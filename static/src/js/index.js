/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import 'babel-polyfill';
const bowser = require('bowser');

//import focusmanager from './components/focusmanager';

import * as logger from './utils/logger';
import * as session from './pages/session';
//import * as test from './pages/test';

const pages = {
  session
};

/**
 * Initialise page-specific modules.
 * @param {string} name The page's name.
 * @param {Object} options Options to pass to page's module.
 */
function init(name, options) {
  const docEl = document.documentElement;

  if (name !== 'unsupported' && !Modernizr.webgl) {
    return window.location.replace('/unsupported');
  }

  if (bowser.msie) {
    docEl.className = docEl.className.concat(' msie');
  }

  if (name && pages[name] && pages[name].init) {
    pages[name].init(options || {});
  }
}

export { init };
