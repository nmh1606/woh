
var hitmarker_png = "https://hungdeptrai.com/images.png"
var hitmarker_ogg = "../h.mp3"
var triple_ogg = "../u.mp3"
var horn_ogg = "../n.mp3"
var damn_ogg = "../g.mp3"

var hitTimes = [ 0, 0, 0 ];
var scrollTime = 0;
var hiterator = 0;

var hornAudio = new Audio();
hornAudio.src = horn_ogg;
document.body.appendChild(hornAudio);
var damnAudio = new Audio();
damnAudio.src = damn_ogg;
document.body.appendChild(damnAudio);
var seizureInProgress = false;
var scrollIntensificationInProgress = false;

function causeSeizure() {
    if (seizureInProgress)
        return;
    seizureInProgress = true;
    var id, prg = 0, theta = 0, updateSeizure = function() {
        theta = Math.sin(prg*10.)/5;
        document.body.style.transform = "rotate(" + theta + "deg)";
        document.body.style.WebkitTransform = "rotate(" + theta + "deg)";
        if(prg++ > 1000) {
            window.clearInterval(id);
        	document.body.style.transform = "none";
        	document.body.style.WebkitTransform = "none";
            seizureInProgress = false;
        }
    };
    id = window.setInterval(updateSeizure, 1000/60);
}

function intensifyScrolling() {
    if (scrollIntensificationInProgress)
        return;
    scrollIntensificationInProgress = true;
    var txtDiv = document.createElement("div");
    txtDiv.innerText = "FBI WARNING !";
    txtDiv.style.position = "fixed";
    txtDiv.style.top = "45%";
    txtDiv.style.left = "40%";
    txtDiv.style.fontSize = "300%";
    txtDiv.style.zIndex = "1000";
    document.documentElement.appendChild(txtDiv);
    var id, prg = 0, theta = 0, updateSeizure = function() {
        theta = Math.sin(prg*10.)*3;
        txtDiv.style.transform = "rotate(" + theta + "deg)";
        txtDiv.style.WebkitTransform = "rotate(" + theta + "deg)";
        if(prg++ > 100) {
            window.clearInterval(id);;
    		document.documentElement.removeChild(txtDiv);
            scrollIntensificationInProgress = false
        }
    };
    id = window.setInterval(updateSeizure, 1000/60);
}

function mark(x, y) {
    hitTimes[hiterator++%3] = Date.now();
    var hitTimeDiffs = Math.abs(hitTimes[0] - hitTimes[1]) + Math.abs(hitTimes[1] - hitTimes[2]);
    if (hitTimeDiffs < 1000) {
        tripleAudio = new Audio();
        tripleAudio.src = triple_ogg;
        document.body.appendChild(tripleAudio);
        tripleAudio.play();
    }
    
    img = new Image();
    img.src = hitmarker_png;
    img.style.position = "fixed";
    img.style.left = (x - 24) + "px";
    img.style.top = (y - 24) + "px";
    img.style.webkitPointerEvents = "none";
    img.style.mozPointerEvents = "none";
    img.style.webkitUserSelect = "none";
    img.style.mozUserSelect = "none";
    img.style.zIndex = "1000";
    document.documentElement.appendChild(img);
    
    audio = new Audio();
    audio.src = hitmarker_ogg;
    document.body.appendChild(audio);
    audio.play();
    
    window.setTimeout(function() {
        document.documentElement.removeChild(img);
        document.body.removeChild(audio);
    }, 50);
}


document.addEventListener("click", function(evt) {
    evt = (evt || event);
    mark(evt.clientX, evt.clientY);
    causeSeizure();
});

window.addEventListener("scroll", function(evt) {
    /* rate limit for smooth scrolling */
    if (Date.now() - scrollTime < 50) return;
    scrollTime = Date.now();
    hornAudio.pause();
    hornAudio.currentTime = 0;
    hornAudio.play();
    intensifyScrolling();
});

window.addEventListener("contextmenu", function(evt) {
    damnAudio.pause();
    damnAudio.currentTime = 0;
    damnAudio.play();    
    causeSeizure();
});


var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "* { color: white;font-family: \"Jura\" ; }";
document.body.appendChild(css);


