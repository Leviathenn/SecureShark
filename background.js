// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openPopup') {
      chrome.action.openPopup();
      sendResponse({status: 'Popup opened'});
    }
  }); 