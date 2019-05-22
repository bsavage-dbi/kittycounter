document.addEventListener('DOMContentLoaded', function () {

    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.cats).forEach(function (url) {
        const div = document.createElement('div')
        div.innerHTML = `${url} ----------> <b>${bg.cats[url]}</b> <br /><br/>`
        document.body.appendChild(div)

    })

}, false)


// var app = chrome.runtime.getBackgroundPage();

// function hello() {
//     chrome.tabs.executeScript({
//         file: 'wordReplace.js'
//     });
// }

// document.getElementById('clickme').addEventListener('click', hello);


chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: 'enableFeature' }, function (response) {
    });
});
