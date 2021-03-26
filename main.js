var rowStart = 0 
var currHeight = 20
var background = document.getElementById('background')

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

background.setAttribute("height", scrollHeight)

while (currHeight < scrollHeight) { 
    while (rowStart < window.innerWidth) { 
        var add = document.createElementNS("http://www.w3.org/2000/svg", "text")
        add.setAttribute("x", rowStart) 
        add.setAttribute("y", currHeight)
        add.setAttribute("class", "small")
        add.setAttribute("fill", "#CBC3E3")
        add.innerHTML = "MJ"
        background.appendChild(add)
        rowStart += 50
    } 
    currHeight += 50 
    rowStart = (parseInt(currHeight / 10) % 2 == 0) ? 0 : 25
}