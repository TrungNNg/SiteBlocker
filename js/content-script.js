//document.body.innerHTML = `<p id="test">HELOW</p>`
console.log("content script exist")
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("inside onmessage contente script")
    console.log(message)
    console.log(sender)
    sendResponse("content script recieved", message)
})
