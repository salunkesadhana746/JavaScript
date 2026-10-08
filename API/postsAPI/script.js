// API posts data display

const posts = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement("div");
      div.setAttribute = element.title;
      photoBox.appendChild(div);
    });
  });
