var listItems = document.getElementsByTagName('li');

var heading = document.querySelector('h2');             
var headingText = heading.firstChild.nodeValue;           
var totalItems = listItems.length;                        
var newHeading = headingText + ' (' + totalItems + ')';   

for (var i = 0; i < listItems.length; i++) {
    var item = listItems[i].textContent.toLowerCase();
    if (item === "fresh figs" || item === "kale" || item === "honey") {
        listItems[i].className = 'cool';  
    }
}
heading.innerHTML = newHeading;