const re = new RegExp('kitty', 'gi')
const matches = document.documentElement.innerHTML.match(re)
if (matches === null) {
    chrome.runtime.sendMessage({
        url: window.location.href,
        count: 'no kitties here -- how sad!'
    })
}
else {
chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length
})
}
// function injectTheScript() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         // Injects JavaScript code into a page
//         chrome.tabs.executeScript(tabs[0].id, { file: 'wordReplace.js' });
//     });
// }
// // adding listener to your button in popup window
// document.getElementById('clickme').addEventListener('click', injectTheScript);


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(request.method, true, true);
        document.dispatchEvent(evt);
    }
);
