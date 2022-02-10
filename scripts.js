document.addEventListener('DOMContentLoaded', function () {

});

let headercontainer = document.createElement('div');
document.body.appendChild(headercontainer);
headercontainer.setAttribute("class", "header-container");
//headercontainer.appendChild(document.createTextNode("some text"));

let h1 = document.createElement('h1');
h1.appendChild(document.createTextNode("This is an h1"));
headercontainer.appendChild(h1);

let h2 = document.createElement('h2');
h2.appendChild(document.createTextNode("This is an h2"));
headercontainer.appendChild(h2);

let h3 = document.createElement('h3');
h3.appendChild(document.createTextNode("This is an h3"));
headercontainer.appendChild(h3);
let h4 = document.createElement('h4');
h4.appendChild(document.createTextNode("This is an h4"));
headercontainer.appendChild(h4);
let h5 = document.createElement('h5');
h5.appendChild(document.createTextNode("This is an h5"));
headercontainer.appendChild(h5);
let h6 = document.createElement('h6');
h6.appendChild(document.createTextNode("This is an h6"));
headercontainer.appendChild(h6);

h1.setAttribute("class", "h1");
h2.setAttribute("class", "h2");
h3.setAttribute("class", "h3");
h4.setAttribute("class", "h4");
h5.setAttribute("class", "h5");
h6.setAttribute("class", "h6");

h1.addEventListener("dblclick", function () {
    document.getElementsByClassName("h1");
    this.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
});
h2.addEventListener("dblclick", function () {
    document.getElementsByClassName("h2");
    this.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
});
h3.addEventListener("dblclick", function () {
    document.getElementsByClassName("h3");
    this.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
});
h4.addEventListener("dblclick", function () {
    document.getElementsByClassName("h4");
    this.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
});
h5.addEventListener("dblclick", function () {
    document.getElementsByClassName("h5");
    this.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
});
h6.addEventListener("dblclick", function () {
    document.getElementsByClassName("h6");
    this.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
});

const listbutton = document.querySelector(".list-button");
console.log(listbutton);
listbutton.addEventListener("click", addList);

function addList() {
    let list = document.querySelector("ul");
    if (list == null) {
        list = document.createElement('ul');
        document.body.appendChild(list);
    }
    let newitem = document.createElement('li');
    newitem.setAttribute("class", "list"+listnum)
    newitem.appendChild(document.createTextNode("This is list item " + listnum));
    list.appendChild(newitem);
    listnum++;
}

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        event.target.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
    }
  });

document.querySelector('body').addEventListener('dblclick', function(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        event.target.remove();
    }
  });

let listnum = 1;
let colorArr = ["red", "blue", "green", "yellow", "black", "purple", "orange", "pink"];

