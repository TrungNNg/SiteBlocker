chrome.tabs.onActivated.addListener(() => {
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
        const current_hostname = new URL(tabs[0].url).hostname
        chrome.storage.local.get("blockedSites", (data) => {
            //console.log(data.blockedSites.includes(current_hostname))
            //console.log(tabs[0].id)
            chrome.tabs.sendMessage(
                tabs[0].id,
                {isBlocked : data.blockedSites.includes(current_hostname)},
                (res) => {
                    console.log("message from content script", res)
                }
            )
        })
    })
})

