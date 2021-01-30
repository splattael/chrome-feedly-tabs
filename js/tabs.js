(function() {
  /**
   * Iterates over each link found on a Feedly page emiting its url to +callback+.
   */
  function eachFeedlyUrl(callback) {
    var link_attribute = "data-alternate-link";
    var links = document.querySelectorAll("article[" + link_attribute + "]");
    for (var i = 0, size = links.length; i < size; i++) {
      var link = links[i];
      var url = link.getAttribute(link_attribute);
      callback(url);
    }
  }

  eachFeedlyUrl(function(url) {
    browser.runtime.sendMessage({ showTab: url });
  });
})();
