// ==UserScript==
// @name        Auto-Refresh
// @version     0.1
// @description Match any url but youtube
// @match       https://*
// @include     https://*
// @exclude     https://*.youtube.com*
// ==/UserScript==

var iDiv = document.createElement('div');
iDiv.id = 'block1';
iDiv.className = 'background-color: green; top: 0px; position: sticky; z-index: 99999;';

// Create the inner div before appending to the body
var innerDiv = document.createElement('div');
innerDiv.className = 'block-2';
innerDiv.innerHTML ='<h1>Match Script fired on this page.</h1>';

iDiv.appendChild(innerDiv);

// Then append the whole thing onto the body
document.getElementsByTagName('body')[0].appendChild(iDiv);


setTimeout(function(){ location.reload(); }, (Math.floor(Math.random() * (400 - 100 + 1)) + 100) * 1000);
