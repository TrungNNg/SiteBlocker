console.log("from blocked.js")
const ul = document.getElementById("block_list")

function display_block_list() {
    ul.innerHTML = ""
    chrome.storage.local.get("blockedSites", (data) => {
        data.blockedSites.forEach(element => {
            const u = document.createElement("li")
            u.innerText = element
            u.classList.add("list_item")
            u.addEventListener("click", (element) => {
                remove_url(element.target.innerText, data.blockedSites)
            })
            ul.appendChild(u)
        });
    })
}

display_block_list()

function remove_url(url, block_list) {
    const i = block_list.indexOf(url)
    block_list.splice(i,1)
    chrome.storage.local.set({blockedSites : block_list})
    display_block_list()
}