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


// function hello() {
//     chrome.tabs.executeScript({
//         file: 'wordReplace.js'
//     });
// }

// document.getElementById('clickme').addEventListener('click', hello);

