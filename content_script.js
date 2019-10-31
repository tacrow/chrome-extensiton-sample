chrome.runtime.onMessage.addListener(function(msg) {
console.log('msg.opacity = ' + msg.opacity);
  $('body').css("opacity", msg.opacity);
});