'use strict';

import $ from 'jquery';
import 'bootstrap-sass' ;

import '../css/main.scss';

//Pour faire fonctionner les promesses (ES6)
import 'babel-polyfill';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
