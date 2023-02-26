// bg will listen for message from content script and return whether the current
// url is in blocked list or not
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    //console.log("bg recived message")
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'get-user-data') {
        // get hostname of new url
        const hostname = new URL(sender.url).hostname

        // if the current url is in blocked list this html will be displayed.
        // instead of run this in content script, run it here and send to content script
        // for separation of concern
        var block_html_url = chrome.runtime.getURL("../html/blocked.html")

        // check if hostname is in blockedSites storage
        // if the current hostname is blocked then send message to content script
        chrome.storage.local.get("blockedSites", (data) => {

            // if the blockedSites list in local storage is not empty
            // and the hostname is in blocked list then send message.
            // if not the content script won't recieve any message and do nothing
            if (data.blockedSites && data.blockedSites.includes(hostname)) {
                chrome.tabs.sendMessage(
                    sender.tab.id,
                    {isBlocked: block_html_url},
                    
                    /*
                    (res) => {
                        console.log("message from content script", res)
                    }*/
                )
                //sendResponse({isBlocked: block_html_url})
            } else {
                //console.log("data.blockedSites is empty")
            }
        })
    }
});


/*

// onUpdated will run whenever there is change in current tab
// that include user go do different url, open a new tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("onUpdated")
    // will run only when current tab go to different url, or open a new tab
    if (changeInfo.url) {
        chrome.tabs.sendMessage(
            tabId,
            {result: true},
            (res) => {
                console.log("message from content script", res)
            }
        ).then((data) => {

        })
    }

    /*
    if (changeInfo.url) {
        // get hostname of new url
        const hostname = new URL(changeInfo.url).hostname

        // if the current url is in blocked list this html will be displayed.
        // instead of run this in content script, run it here and send to content script
        // for separation of concern
        var block_html_url = chrome.runtime.getURL("../html/blocked.html")

        // check if hostname is in blockedSites storage
        // if the current hostname is blocked then send message to content script
        chrome.storage.local.get("blockedSites", (data) => {

            // if the blockedSites list in local storage is not empty
            // and the hostname is in blocked list then send message.
            // if not the content script won't recieve any message and do nothing
            if (data.blockedSites && data.blockedSites.includes(hostname)) {
                chrome.tabs.sendMessage(
                    tabId,
                    {result: block_html_url},
                    (res) => {
                        console.log("message from content script", res)
                    }
                )
            } else {
                console.log("data.blockedSites is empty")
            }
        })
    }*/

//})


/*
chrome.tabs.query({active:true, currentWindow:true}, (tabs) => { 
    console.log("tabs.query")
})

chrome.tabs.onActivated.addListener(() => {
    console.log("tabs.onActivated")
})

chrome.tabs.onCreated.addListener(() => {
    console.log("tabs.onCreated")
})

chrome.tabs.onHighlighted.addListener(() => {
    console.log("tabs.Highlighted")
})

chrome.tabs.onRemoved.addListener(() => {
    console.log("tabs.onRemoved")
})*/
