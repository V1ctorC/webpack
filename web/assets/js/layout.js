'use strict';

const $ = require('jquery');
require('bootstrap');

require('bootstrap/dist/css/bootstrap.css');
require('../css/main.css');

//Pour faire fonctionner les promesses (ES6)
require('babel-polyfill');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
