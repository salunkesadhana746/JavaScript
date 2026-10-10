const cartContainer = document.getElementById("cart-container");

const displayCarts = () => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];
  cartList.forEach((element) => {
    const div = document.createElement("div");
    div.className = "card my-3 col-7";

    div.innerHTML = `<div class="card-body d-flex">
    <img
      height="150"
      width="150"
      class="rounded me-3"
      src="${element.thumbnail}"
      alt=""
    />
    <div>
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">
       ${element.description}
      </p>
      <p>Price. ${element.price} USD | Discount. ${element.discountPercentage}%</p>
      <div class="d-flex gap-3">
        <div>
          <button class="btn btn-primary">-</button>
          <span class="fs-5 fw-bold mx-3">1</span>
          <button class="btn btn-primary">+</button>
        </div>
        <button class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>`;

    cartContainer.appendChild(div);
  });
};

displayCarts();
