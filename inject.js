
// var app = chrome.runtime.getBackgroundPage();

// function hello() {
//     chrome.tabs.executeScript({
//         file: 'wordReplace.js'
//     });

//     document.getElementById('clickme').addEventListener('click', hello);

// }


// function injectTheScript() {
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     // Injects JavaScript code into a page
//     chrome.tabs.executeScript(tabs[0].id, { file: 'wordReplace.js' });
// });
// }
// // adding listener to your button in popup window
// document.getElementById('clickme').addEventListener('click', injectTheScript);

document.addEventListener('enableFeature', function (e) {
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,pq,r,s,t,u,v,w,x,y,z]/gi, ' kitty ');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
});
