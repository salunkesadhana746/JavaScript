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
const inputSearchBtn = document.getElementById("search-btn");

const productTbody = document.getElementById("product-tbody");

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

const updateProduct = (i) => {
  inputProductName.value = allProduct[i].name;
  inputProductUrl.value = allProduct[i].img;
  inputProductDescription.value = allProduct[i].description;
  inputProductPrice.value = allProduct[i].price;
  inputProductCategory.value = allProduct[i].category;
  inputProductDiscount.value = allProduct[i].discount;
  inputProductRating.value = allProduct[i].rating;

  addProductBtn.classList = "d-none";
  editProductBtn.className = "btn btn-warning";
};

displayProducts();
