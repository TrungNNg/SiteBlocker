//const current_url = document.querySelector("url")
var current_url;
var hostname;
chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
    current_url = tabs[0].url
    hostname = new URL(current_url).hostname
    console.log(current_url, hostname)

    const h = document.getElementById("hostname")
    h.innerText = hostname

    var temp;
    const btn = document.getElementById("btn")
    btn.addEventListener("click", () => {
        chrome.storage.local.get("blockedSites", (data) => {
            if (data.blockedSites !== undefined) {
                // this won't work
                // chrome.storage.local.set({blockedSites:data.blockedSites.push(hostname)})

                // this turn temp to number ?????
                // temp = data.blockedSites.push(hostname) 

                // have to do like this
                temp = data.blockedSites
                temp.push(hostname)
                chrome.storage.local.set({blockedSites:temp})
            } else {
                // can not use Map, have to use array
                chrome.storage.local.set({blockedSites:[hostname]})
            }
        })
        const bottom_div = document.getElementById("bottomItem")
        const result = document.createElement("p")
        result.innerText = hostname + " has been blocked, refresh to see change"
        bottom_div.appendChild(result)
    })

    /*
    const test_btn = document.getElementById("test_btn")
    test_btn.addEventListener("click", () => {
        
        chrome.storage.local.get("blockedSites", (data) => {
            console.log(data.blockedSites)
        })
        
       //chrome.storage.local.clear()
    })*/
})


