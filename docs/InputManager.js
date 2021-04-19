var count = 0;
var countText;
function BodyLoaded() {
    var obj = document.getElementById('touchzone');
    obj.addEventListener('touchstart', TouchHandler, false);
    obj.addEventListener('mousedown', TouchHandler, false);
    countText = document.getElementById('countID');
    UpdateCount();
}
function TouchHandler() {
    UpdateCount();
}
function UpdateCount() {
    countText.innerText = "Count : " + count++;
}
