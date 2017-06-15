var toolboxMainUl = document.getElementById("toolbox-main-ul");
toolboxMainUl.onclick = function (event) {
    var target = event.target;
    if (target.className != 'toolbox-ul-parents' && target.className != 'toolbox-ul-parents toggle-angle') return;
    toolbarToggle(target.nextElementSibling);
    toggleAngle(target);
};


function toolbarToggle(node) {
    $(node).slideToggle("slow",function () {

    });
}

function toggleAngle(node) {
    $(node).toggleClass("toggle-angle");
}