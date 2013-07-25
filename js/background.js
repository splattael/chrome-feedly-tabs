/**
 * Execute tabs.js in context of current tab.
 */
chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "js/tabs.js" });
});

/**
 * Show page action on tabs which contains "feedly.com".
 */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf("feedly.com") > -1) {
    chrome.pageAction.show(tabId);
  }
});

/**
 * Message listener triggered by tabs.js which creates a new inactive tab.
 *
 * @params request.url - The URL to be opened in tab.
 */
chrome.extension.onMessage.addListener(function(request, sender, response) {
  chrome.tabs.create({ url: request.url, active: false });
});
