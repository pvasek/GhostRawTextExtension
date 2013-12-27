var injectedScript = document.createElement('script');
injectedScript.src = chrome.extension.getURL("rawtext.js");
injectedScript.onload = function() {
    this.parentNode.removeChild(this);
};
document.documentElement.appendChild(injectedScript);