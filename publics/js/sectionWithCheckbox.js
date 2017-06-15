var searchResult = document.getElementById('search-result');
searchResult.onclick = function (event) {
    var target = event.target;
    if (target.className != 'result-checkbox' && target.className != 'result-checkbox empty-checkbox') return;
    toggleCheckbox(target);

    var arrayForCheckboxClasses = target.classList;
    for (var key in arrayForCheckboxClasses){
        if (arrayForCheckboxClasses[key] === "empty-checkbox"){
            target.parentNode.parentNode.style.opacity = '0.5';
            return;
        }
    }
    target.parentNode.parentNode.style.opacity = '1';
};



function toggleCheckbox(node) {
    $(node).toggleClass("empty-checkbox");
}