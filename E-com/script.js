// create a ecommerce admin panel where user can add/update/delete products. user cans search, filter and sort products by name, price etc. product add to cart and quantity increament/decrement based bill calculate.

//get input products details
const inputProductName = document.getElementById("input-product-name");
const inputProductUrl = document.getElementById("input-product-url");
const inputProductDescription = document.getElementById(
  "input-product-description",
);
const inputProductPrice = document.getElementById("input-product-price");
const inputProductDiscount = document.getElementById("input-product-discount");
const inputProductCategory = document.getElementById("input-product-category");
const inputProductRating = document.getElementById("input-product-rating");

const addProductBtn = document.getElementById("add-btn");
const editProductBtn = document.getElementById("edit-btn");

const inputSearch = document.getElementById("input-search");
const searchBtn = document.getElementById("search-btn");
const resetBtn = document.getElementById("reset-btn");

const productTbody = document.getElementById("product-tbody");

const priceFilter = document.getElementById("price-filter");
const categoryDropdown = document.getElementById("category-dropdown");

let allProduct = JSON.parse(localStorage.getItem("products")) || [];

const handleProductList = () => {
  const product = {
    name: inputProductName.value,
    img: inputProductUrl.value,
    description: inputProductDescription.value,
    price: inputProductPrice.value,
    discount: inputProductDiscount.value,
    category: inputProductCategory.value,
    rating: inputProductRating.value,
  };

  allProduct.push(product);
  localStorage.setItem("products", JSON.stringify(allProduct));
  displayProducts();
  clearInputBox();
};

addProductBtn.addEventListener("click", handleProductList);

const displayProducts = () => {
  productTbody.innerHTML = "";
  allProduct.forEach((product, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<th scope="row">${i + 1}</th>
            <td>
              <img
                height="100"
                src="${product.img}"
                alt=""
              />
            </td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td width="200">${product.description}</td>
            <td>${product.price}</td>
            <td>${product.discount}%</td>
            <td>${product.rating}</td>
            <td class="">
              <button class="btn btn-warning" onclick="updateProduct(${i})">Edit</button>
              <button class="btn btn-danger ms-3" onclick="deleteProduct(${i})">Delete</button>
            </td>`;
    productTbody.appendChild(tr);
  });
};

const deleteProduct = (i) => {
  allProduct.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(allProduct));
  displayProducts();
};

let editIndex = null;

const clearInputBox = () => {
  inputProductName.value = "";
  inputProductUrl.value = "";
  inputProductDescription.value = "";
  inputProductPrice.value = "";
  inputProductDiscount.value = "";
  inputProductCategory.value = "";
  inputProductRating.value = "";
};

const updateProduct = (i) => {
  editIndex = i;

  inputProductName.value = allProduct[i].name;
  inputProductUrl.value = allProduct[i].img;
  inputProductDescription.value = allProduct[i].description;
  inputProductPrice.value = allProduct[i].price;
  inputProductCategory.value = allProduct[i].category;
  inputProductDiscount.value = allProduct[i].discount;
  inputProductRating.value = allProduct[i].rating;

  addProductBtn.classList.add("d-none");
  editProductBtn.classList.remove("d-none");
};

const handleEditProduct = () => {
  allProduct[editIndex] = {
    name: inputProductName.value,
    img: inputProductUrl.value,
    description: inputProductDescription.value,
    price: inputProductPrice.value,
    discount: inputProductDiscount.value,
    category: inputProductCategory.value,
    rating: inputProductRating.value,
  };

  localStorage.setItem("products", JSON.stringify(allProduct));
  displayProducts();

  editIndex = null;
  clearInputBox();
  editProductBtn.classList.add("d-none");
  addProductBtn.classList.remove("d-none");
};

editProductBtn.addEventListener("click", handleEditProduct);

const searchProducts = () => {
  allProduct = JSON.parse(localStorage.getItem("products")) || [];
  const search = inputSearch.value;
  allProduct = allProduct.filter(
    (product) =>
      product.name.toLowerCase() == search.toLowerCase() ||
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.price.toLowerCase().includes(search.toLowerCase()) ||
      product.rating.toLowerCase().includes(search.toLowerCase()),
  );
  displayProducts();
};

const handleReset = () => {
  inputSearch.value = "";
  allProduct = JSON.parse(localStorage.getItem("products")) || [];
  displayProducts();
};

searchBtn.addEventListener("click", searchProducts);
resetBtn.addEventListener("click", handleReset);

displayProducts();

priceFilter.onchange = () => {
  allProduct = JSON.parse(localStorage.getItem("products")) || [];
  console.log(priceFilter.value);
  if (priceFilter.value == "max") {
    allProduct.sort((a, b) => b.price - a.price);
  } else if (priceFilter.value == "min") {
    allProduct.sort((a, b) => a.price - b.price);
  } else {
    allProduct = JSON.parse(localStorage.getItem("products")) || [];
  }
  displayProducts();
};

categoryDropdown.onchange = () => {
  let dropdown = categoryDropdown.value;
  allProduct = JSON.parse(localStorage.getItem("products")) || [];

  if (dropdown !== "all") {
    allProduct = allProduct.filter((product) => product.category === dropdown);
  }

  displayProducts();
};
