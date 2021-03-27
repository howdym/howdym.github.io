function init() {
    initRemove();
    makeBackground();
} 

function initRemove() { 
    var disappear = document.getElementsByClassName("fadeOut");
    for (var i = 0; i < disappear.length; i++) {
        disappear[i].style.display = "none";
    }
}

function appear(id) { 
    var target = document.getElementById(id);
    target.style.display = "block";
    target.setAttribute("class", "fadeIn")
}

function disappear(id) { 
    var target = document.getElementById(id);
    target.setAttribute("class", "fadeOut")
    setTimeout(function() {
        target.style.display = "none";
    }, 1000);
}

function toggle(dom) { 
    var tup = dom.value
    var curr = tup.slice(0, tup.indexOf(","))
    var next = tup.slice(tup.indexOf(",") + 1)
    disappear(curr); 
    window.scrollTo(0, 0);
    setTimeout(function() {
        appear(next);
        makeBackground();
    }, 1500);
}

function makeBackground() { 
    var rowStart = 0 
    var currHeight = 20
    var background = document.getElementById('background')
    while (background.firstChild) 
        background.removeChild(background.lastChild)

    let scrollHeight = Math.max(
        document.body.scrollHeight, 
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
}

init();
