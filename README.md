Apple farmer game !

By G, R & R

var scrolla = false;
var mousey = 0;
var scrolldir = "none";
document.addEventListener('auxclick', function (ev) {
  document.getElementById("origin").style.top = (ev.pageY - 10) + "px"
  document.getElementById("origin").style.left = (ev.pageX - 10) + "px"
  console.log("middlemouse clicked")
  console.log(ev.pageY)
  mousey = ev.pageY
  changemouse()
  return false;
}, false);

function changemouse() {

  scrolla = !scrolla
  console.log(scrolla)
  if (scrolla) {
    document.body.style.cursor = "ns-resize"
    document.getElementById("origin").style.display = "block";
  }
  else {
    document.body.style.cursor = "auto"
    document.getElementById("origin").style.display = "none";
  }

}
document.addEventListener("mousemove", (ev) => {
  if (scrolla && ev.pageY < (mousey - 100)) scrolldir = "up";
  else if (scrolla && ev.pageY > (mousey + 100)) scrolldir = "down";
  else scrolldir = "none";
  console.log(scrolldir)
});
function scrollup() {

  window.scrollBy(0, -10);
}
function scrolldown() {
  window.scrollBy(0, 10);
}
const interval = setInterval(function () {
  if (scrolldir == "none") { }
  else if (scrolldir == "up") window.scrollBy(0, -10);
  else if (scrolldir == "down") window.scrollBy(0, 10);

}, 10);
