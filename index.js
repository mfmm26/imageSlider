const openBox = document.getElementById("openBox");
const openImage = document.getElementById("openImage");
const par = document.querySelectorAll(".par");
const paragraph = document.getElementById("paragraph");

function OpenImageBox(src, innerHTML) {
  openBox.style.display = "block";
  openImage.src = src;
  paragraph.innerHTML = innerHTML;
}

function CloseImageBox() {
  openBox.style.display = "none";
}
