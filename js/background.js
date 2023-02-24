/*
chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
    console.log("tab query from background")
    console.log(tabs[0].url)
    const h = new URL(tabs[0].url).hostname
    chrome.storage.local.get([h]).then((result) => {
        console.log("Value currently is " + result.key);
    });
})*/