chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'unsupported') {
        chrome.tabs.create({
            url: chrome.extension.getURL('webview/unsupported.html'),
            active: false
        }, function(tab) {
            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true
            });
        });
    }
});