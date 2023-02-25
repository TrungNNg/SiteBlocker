// The content script can not access url, so the background will check the url and local 
// storage to see if current url is in block list. 

// However, there is a delay when injecting content script to current page, therefore, if
// background just send message to content script it will give error if content script does
// not exist yet.

// To deal with this, content script will send tp bg will it injected, 
// and backgound will listen and send message to content which content will listen and
// update the page

// content script will listen for event from background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    /*
    console.log("inside onmessage contente script")
    console.log(message)
    console.log(sender)
    sendResponse("content script recieved", message)
    console.log(message.isBlocked)
    */
    if (message.isBlocked) {
        window.location.replace(message.isBlocked);
    }

})

chrome.runtime.sendMessage('get-user-data');
