chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "js/openlinks.js" });
});

chrome.extension.onMessage.addListener(function(request, sender, response) {
  chrome.tabs.create({ url: request.url, active: false });
});
