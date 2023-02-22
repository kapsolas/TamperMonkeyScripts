// ==UserScript==
// @name         Autoclick
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match       https://*
// @include     https://*
// @exclude     https://*.youtube.com*
// @grant        none
// ==/UserScript==

/*
(function() {
    'use strict';

    // Your code here...
})();s
*/

var timeDelaySeconds    = getRandomInt(10,300);

setInterval (clickRandomLink, timeDelaySeconds * 1000);

function clickRandomLink () {
    var links = document.querySelectorAll ("a");
    /*--- Or fine-tune the links to certain areas or types.  EG:
        var links = document.querySelectorAll ("#content a");
        var links = document.querySelectorAll ("a.comments");
        etc.
    */
    if (links.length) {
        var linkToClick = links[getRandomInt (0, links.length - 1) ];
        var clickEvent  = document.createEvent ('MouseEvents');

        clickEvent.initEvent ('click', true, true);
        linkToClick.dispatchEvent (clickEvent);
    }
}

function getRandomInt (min, max) {
    return Math.floor (Math.random () * (max - min + 1) ) + min;
}