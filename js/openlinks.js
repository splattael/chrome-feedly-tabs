var links = document.querySelectorAll("div[data-alternate-link]");
for (var i=0, size=links.length; i < size; i++) {
  var link = links[i];
  var url = link.getAttribute("data-alternate-link");
  chrome.extension.sendMessage({ url: url });
}
