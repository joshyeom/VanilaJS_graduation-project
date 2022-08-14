const backgroundImage = ["0.jpg"];
const chosenImage =
  backgroundImage[Math.floor(Math.random() * backgroundImage.length)];

const imageInHTML = document.createElement("img");

imageInHTML.src = `img/${chosenImage}`;

document.body.appendChild(imageInHTML);
