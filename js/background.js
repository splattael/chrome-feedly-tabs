/**
 * Execute tabs.js in context of current tab.
 */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "js/tabs.js" });
});

/**
 * Message listener triggered by tabs.js which creates a new inactive tab.
 *
 * @params request.url - The URL to be opened in tab.
 */
chrome.extension.onMessage.addListener(function(request, sender, response) {
  chrome.tabs.create({ url: request.url, active: false });
});
