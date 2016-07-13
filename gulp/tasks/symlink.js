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
var PATHS = require('../paths');

var fs = require('fs');

module.exports = function(gulp) {
  return {
    dev: function() {
      if (!fs.existsSync(PATHS.DIST.ROOT)) {
        fs.mkdirSync(PATHS.DIST.ROOT);
      }

      if (!fs.existsSync(__dirname + '/../../udon/templates/static/dist/img')) {
        fs.symlinkSync(__dirname + '/../../static/src/img', __dirname + '/../../udon/templates/static/img');
      }

      if (!fs.existsSync(__dirname + '/../../static/dist/fonts')) {
        fs.symlinkSync(__dirname + '/../../static/src/fonts', __dirname + '/../../udon/templates/static/fonts');
      }
    }
  };
};
