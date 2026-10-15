//get element by id
const inputProductName = document.getElementById("input-product-name");
const inputProductURl = document.getElementById("input-product-url");
const inputProductPrice = document.getElementById("input-product-price");
const inputProductDescription = document.getElementById(
  "input-product-description",
);
const inputProductDiscount = document.getElementById("input-product-discount");
const inputProductCategory = document.getElementById("input-product-category");
const inputProductRating = document.getElementById("input-product-rating");

//button
const addProductBtn = document.getElementById("add-product-btn");
const editProductBtn = document.getElementById("edit-product-btn");

// search option
const inputSearch = document.getElementById("input-search");
const searchBtn = document.getElementById("search-btn");
const resetBtn = document.getElementById("reset-btn");

const productTbody = document.getElementById("product-tbody");

const priceFilter = document.getElementById("price-filter");
const categoryAllProduct = document.getElementById("category-all-product");

let allProduct = JSON.parse(localStorage.getItem("product")) || [];

const handleProductListing = () => {
  const product = {
    name: inputProductName.value,
    img: inputProductURl.value,
    description: inputProductDescription.value,
    price: inputProductPrice.value,
    discount: inputProductDiscount.value,
    category: inputProductCategory.value,
    rating: inputProductRating.value,
  };

  allProduct.push(product);
  localStorage.setItem("product", JSON.stringify(allProduct));
  displayProduct();
  clearBox();
};

addProductBtn.addEventListener("click", handleProductListing);

const displayProduct = () => {
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
            <td>${product.price}</td>
            <td width="200">${product.description}</td>
            <td>${product.discount}%</td>
            <td>${product.category}</td>
            <td>${product.rating}</td>
            <td>
                <button class="btn btn-warning" >Edit</button>
                <button class="btn btn-danger ms-3" onclick="deleteProducts(${i})">Delete</button>
            </td> `;
    productTbody.appendChild(tr);
  });
};

const deleteProducts = (i) => {
  allProduct.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(allProduct));
  displayProduct();
};

const clearBox = () => {
  inputProductName.value = "";
  inputProductURl.value = "";
  inputProductDescription.value = "";
  inputProductPrice.value = "";
  inputProductDiscount.value = "";
  inputProductCategory.value = "";
  inputProductRating.value = "";
};

const searchProducts = () => {
  allProduct = JSON.parse(localStorage.getItem("product")) || [];

  const search = inputSearch.value;
  allProduct = allProduct.filter(
    (product) =>
      product.name.toLowerCase() == search.toLowerCase() ||
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.price.toLowerCase().includes(search.toLowerCase()) ||
      product.rating.toLowerCase().includes(search.toLowerCase()),
  );
  displayProduct();
};

const handleReset = () => {
  inputSearch.value = "";
  allProduct = JSON.parse(localStorage.getItem("product")) || [];
  displayProduct();
};

searchBtn.addEventListener("click", searchProducts);
resetBtn.addEventListener("click", handleReset);

displayProduct();

priceFilter.onchange = () => {
  allProduct = JSON.parse(localStorage.getItem("product")) || [];
  console.log(priceFilter.value);
  if (priceFilter.value == "max") {
    allProduct.sort((a, b) => b.price - a.price);
  } else if (priceFilter.value == "min") {
    allProduct.sort((a, b) => a.price - b.price);
  } else {
    allProduct = JSON.parse(localStorage.getItem("product")) || [];
  }
  displayProduct();
};

categoryAllProduct.onchange = () => {
  let dropdown = categoryAllProduct.value.trim().toLowerCase();
  allProduct = JSON.parse(localStorage.getItem("product")) || [];

  if (dropdown !== "all" && dropdown !== "") {
    allProduct = allProduct.filter(
      (product) => product.category.trim().toLowerCase() === dropdown,
    );
  }

  displayProduct();
};
