// project description
//  1. fetch products from api and display in grid view.
//  2. add to cart - add product in localstorage for cart handling.
//  3. additional page/new page = show all cart products by view cart button
//  4. unique products display
//  5. increment/decrement in products quantity
//  6. total calculation with discount and 18% GST
//  7. if decrement in products quantity below 1 will remove product.
//  8. increment in products quantity not allowed more than stock.
// bonus: search products, cart count badge, toast messages

const productContainer = document.getElementById("product-container");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const cartCount = document.getElementById("cart-count");

let allProducts = [];

const getCart = () => JSON.parse(localStorage.getItem("carts")) || [];
const saveCart = (list) => localStorage.setItem("carts", JSON.stringify(list));

const updateCartCount = () => {
  const total = getCart().reduce((sum, item) => sum + (item.qty || 1), 0);
  cartCount.textContent = total;
};

const fetchProduct = () => {
  productContainer.innerHTML = `<div class="spinner-border mt-5" role="status"></div>`;

  fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())
    .then((data) => {
      allProducts = data.products;
      displayProducts(allProducts);
    });
};

const displayProducts = (products) => {
  productContainer.innerHTML = "";

  if (products.length === 0) {
    productContainer.innerHTML = `<p class="mt-5">No products found.</p>`;
    return;
  }

  products.forEach((element) => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.width = "18rem";
    div.innerHTML = `<img src="${element.thumbnail}" class="card-img-top" alt="${element.title}">
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
                    <button class="btn btn-primary w-100" data-id="${element.id}">Add to cart</button>
                </div>`;

    productContainer.appendChild(div);
  });
};

const addToCart = (id) => {
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;

  const cartList = getCart();
  const existing = cartList.find((item) => item.id === id);

  if (existing) {
    // not allowed more than stock
    if (existing.qty >= product.stock) return;
    existing.qty++;
  } else {
    if (product.stock < 1) return;
    cartList.push({
      id: product.id,
      title: product.title,
      description: product.description,
      thumbnail: product.thumbnail,
      price: product.price,
      discountPercentage: product.discountPercentage,
      stock: product.stock,
      qty: 1,
    });
  }

  saveCart(cartList);
  updateCartCount();
};

// one listener for all "Add to cart" buttons
productContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-id]");
  if (btn) addToCart(Number(btn.dataset.id));
});

// ---------- search ----------
const searchProducts = () => {
  const text = searchInput.value.trim().toLowerCase();
  const filtered = allProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(text) ||
      p.description.toLowerCase().includes(text) ||
      (p.category || "").toLowerCase().includes(text),
  );
  displayProducts(filtered);
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // page reload nahi hoga
  searchProducts();
});
searchInput.addEventListener("input", searchProducts);

// ---------- start ----------
updateCartCount();
fetchProduct();
