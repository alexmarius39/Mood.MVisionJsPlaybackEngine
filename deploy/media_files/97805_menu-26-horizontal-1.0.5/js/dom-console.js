if (typeof console === 'undefined') console = {};
console.olog = console.log || function () { };
console.owarn = console.warn || function () { };
console.oerror = console.error || function () { };
console.oinfo = console.info || function () { };
console.odebug = console.debug || function () { };

console.log = function (message) {
    console.olog(message);
    var p = document.createElement('p');
    p.innerHTML = message;
    p.className = "animated fadeIn";
    document.getElementById('console').appendChild(p);
};

console.warn = function (message) {
    console.owarn(message);
    var p = document.createElement('p');
    p.innerHTML = message;
    p.style.color = "yellow";
    p.className = "animated fadeIn";
    document.getElementById('console').appendChild(p);
};

console.error = function (message) {
    console.oerror(message);
    var p = document.createElement('p');
    p.innerHTML = message;
    p.style.color = "red";
    p.className = "animated fadeIn";
    document.getElementById('console').appendChild(p);
};

console.info = function (message) {
    console.oinfo(message);
    var p = document.createElement('p');
    p.innerHTML = message;
    p.style.color = "cyan";
    p.className = "animated fadeIn";
    document.getElementById('console').appendChild(p);
};

console.debug = function (message) {
    console.odebug(message);
    var p = document.createElement('p');
    p.innerHTML = message;
    p.style.color = "white";
    p.className = "animated fadeIn";
    document.getElementById('console').appendChild(p);
};

window.setInterval(function () {
    var elem = document.getElementById('console');
    elem.scrollTop = elem.scrollHeight;
}, 1000);