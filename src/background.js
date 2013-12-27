function showPageAction(tabId, changeInfo, tab) {
	if (tab.url.indexOf('/ghost/editor') > -1) {
		chrome.pageAction.show(tabId);
	}	
}

chrome.tabs.onUpdated.addListener(showPageAction);