// need to access list of blocked urls
/*
chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
    console.log("tab query from content script")
    console.log(tabs[0].url)
})
console.log("from content script")
// if current url is in block list, change body.inenerHTML

document.body.innerHTML = "<p> BLOCKED :) </p>"
*/