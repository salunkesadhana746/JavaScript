// project description
// done 1. fetch products from api and display in grid view.
// todo 2. add to cart - add product in localstorage for cart handling.
// todo 3. additional page/new page = show all cart products by view cart button
// todo 4. unique products display
// todo 5. increment/decrement in products quanitity
// todo 6. total calculation with discount and 18% GST + increment/decrement quantity.
// todo 7. if decrement in products quanitity after 1 will remove product.
// todo 8. increment in products quanitity not allow more than stock.

const productContainer = document.getElementById("product-container");

const fetchProduct = () => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      displayProducts(data.products);
    });
};

const displayProducts = (products) => {
  products.forEach((element, i) => {
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
                    <li class="list-group-item">${element.rating}⭐</li>
                    <li class="list-group-item">Price - USD ${element.price} only/-</li>
                </ul>
                <div class="card-body">
                    <button class="btn btn-primary w-100" onclick="addToCart(${element.id})">Add to card</button>
                </div>`;

    productContainer.appendChild(div);
  });
};

const addToCart = (id) => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];

  fetch("https://dummyjson.com/products/" + id)
    .then((res) => res.json())
    .then((data) => {
      cartList.push(data);
      localStorage.setItem("carts", JSON.stringify(cartList));
    });

  alert("Add to cart successfully !");
};

fetchProduct();
