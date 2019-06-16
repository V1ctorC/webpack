'use strict';

const $ = require('jquery');
require('bootstrap');

require('../css/main.css');

//Pour faire fonctionner les promesses (ES6)
require('babel-polyfill');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
