var elms = document.getElementsByClassName("art-community");
for (var i = 0; i < elms.length; i++) {
    elms[i].parentElement.removeChild(elms[i]);
}