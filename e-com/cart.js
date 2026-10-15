const cartContainer = document.getElementById("cart-container");

const displayProductsFromCart = () => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];

  cartList.forEach((element) => {
    const div = document.createElement("div");
    div.className = "card col-7 my-3";
    div.innerHTML = ` <div class="card-body d-flex gap-3">
                    <img height="150" width="150"
                        src="${element.thumbnail}"
                        alt="">
                    <div>
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.description}</p>
                        <p>price. ${element.price}USA | Discount. ${element.discountPercentage}%</p>
                        <div class="d-flex gap-3 align-items-center">
                            <div>
                                <button class="btn btn-primary" onclick="qtyDecrement(${i})">+</button>
                                <span class="fw-bold">${element.qty}</span>
                                <button class="btn btn-primary"onclick="qtyIncrement(${i})">-</button>
                            </div>
                            <button class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>`;

    cartContainer.appendChild(div);
  });
};

const qtyDecrement = (index) => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];
  cartList[index].qty--;
  if (cartList[index].qty == 0) {
    cartList.splice(index, 1);
  }
  localStorage.setItem("carts", JSON.stringify(cartList));
  displayProductsFromCart();
};

const qtyIncrement = (index) => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];
  cartList[index].qty++;
  localStorage.setItem("carts", JSON.stringify(cartList));
  displayProductsFromCart();
};

displayProductsFromCart();
