'use strict';

const $ = require('jquery');
require('bootstrap-sass');

require('../css/main.scss');

//Pour faire fonctionner les promesses (ES6)
require('babel-polyfill');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
