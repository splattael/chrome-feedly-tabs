/**
 * Execute tabs.js in context of current tab.
 */
browser.pageAction.onClicked.addListener(function(tab) {
  browser.tabs.executeScript(null, { file: "js/tabs.js" });
});

/**
 * Show page action on tabs which contains "feedly.com".
 */
browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf("feedly.com") > -1) {
    browser.pageAction.show(tabId);
    browser.tabs.sendMessage(tabId, {updated: true}, function(response) {})
  }
});

/**
 * Message listener triggered by tabs.js which creates a new inactive tab.
 *
 * @params request.url - The URL to be opened in tab.
 */
browser.runtime.onMessage.addListener(function(request, sender, response) {
  if (request.showTab) {
    browser.tabs.create({ url: request.showTab, active: false });
  } else if (request.showAll) {
    browser.tabs.executeScript(null, { file: "js/tabs.js" });
  }
});
