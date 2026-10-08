// API photos data display

const photoBox = document.getElementById("photos");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const img = document.createElement("img");
      img.src = element.thumbnailUrl;
      photoBox.appendChild(img);
    });
  });
