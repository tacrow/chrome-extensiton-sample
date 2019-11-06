"use strict";

const el = document.getElementsByTagName('body');

chrome.runtime.onMessage.addListener(function(msg) {
  el[0].style.opacity = msg.opacity;
});