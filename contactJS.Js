document.getElementById("Button").addEventListener("click", function() {
    var picture = document.getElementById("myPicture");
    if (picture.style.display === "none") {
      picture.style.display = "block";
    } else {
      picture.style.display = "none";
    }
  });