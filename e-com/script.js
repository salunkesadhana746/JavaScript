const productContainer = document.getElementById("product-container");
const searchBtn = document.getElementById("search-btn");
const inputSearch = document.getElementById("input-search");

const fetchProduct = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  displayProducts(data.products);
};

const displayProducts = (products) => {
  products.forEach((element) => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.width = "18rem";
    div.innerHTML = `<img src="${element.thumbnail}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${element.returnPolicy}</li>
                    <li class="list-group-item">${element.rating}🌟</li>
                    <li class="list-group-item">${element.price}</li>
                </ul>
                <div class="card-body">
                    <button class="btn btn-primary" onclick="addToCart(${element.id})">Add to Card</button>
                </div>`;
    productContainer.appendChild(div);
  });
};

const addToCart = (id) => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];

  fetch("https://dummyjson.com/products/" + id)
    .then((res) => res.json())
    .then((data) => {
      let isRepeat = false;
      cartList.forEach((element) => {
        if (element.id == data.id) {
          element.qty++;
          localStorage.setItem("carts", JSON.stringify(cartList));
          isRepeat = true;
        }
      });
      if (isRepeat == false) {
        data.qty = 1;
        cartList.push(data);
        localStorage.setItem("carts", JSON.stringify(cartList));
      }
    });
  alert("Add to Cart SuccessFully...");
};

fetchProduct();
