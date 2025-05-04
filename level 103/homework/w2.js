function changeImage() {
    let image = document.getElementById("imageBox");
    if (image.src.includes("image1.jpg")) {
     image.src = "image2.jpg";
    } else {
     image.src = "image1.jpg";
    }
}
