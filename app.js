"use strict";

document.getElementById('js-btn-none').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      opacity: '0'
    });
  });
});

document.getElementById('js-btn-block').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      opacity: '1'
    });
  });
});
