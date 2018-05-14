var feedlyTabs = (function() {
  var createButton = function(onClick) {
    var button = document.createElement("button");

    button.className = "primary feedly-tabs";
    button.addEventListener("click", onClick);
    button.appendChild(document.createTextNode("Tabs"));

    return button;
  };

  var alreadyInjected = function(document) {
    return document.getElementsByClassName("feedly-tabs").length > 0;
  };

  var injectButton = function(document, onClick) {
    var button = createButton(onClick);

    var actions = Array.from(document.getElementsByClassName("actions-container"));
    actions.forEach(function(action) {
      action.insertBefore(button, action.childNodes[0]);
    });
  };

  var run = function(document, onClick) {
    if (!alreadyInjected(document)) {
      injectButton(document, onClick);
    }
  };

  return {
    run: run
  };
})();

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.updated) {
    feedlyTabs.run(document, function(e) {
      browser.runtime.sendMessage({showAll: true});
    });
  }
});
