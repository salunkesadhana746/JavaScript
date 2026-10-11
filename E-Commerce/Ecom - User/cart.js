const cartContainer = document.getElementById("cart-container");

const GST_RATE = 0.18;

const getCart = () => JSON.parse(localStorage.getItem("carts")) || [];
const saveCart = (list) => localStorage.setItem("carts", JSON.stringify(list));

// display product
const displayCarts = () => {
  const cartList = getCart();
  cartContainer.innerHTML = ""; // clear cart container

  if (cartList.length === 0) {
    cartContainer.innerHTML = `
      <h4 class="mt-5">Your cart is empty</h4>// no product than
      //This button is used to add a new product
      <a href="index.html" class="btn btn-primary mt-3">Shop products</a>`;
    return;
  }

  //declare variable
  let subtotal = 0;
  let discountTotal = 0;

  cartList.forEach((element) => {
    const qty = element.qty || 1;
    const original = element.price * qty;
    const discount = (original * element.discountPercentage) / 100;
    subtotal += original;
    discountTotal += discount;

    const div = document.createElement("div");
    div.className = "card my-3 col-12 col-md-9 col-lg-7";
    div.innerHTML = `<div class="card-body d-flex">
      <img height="150" width="150" class="rounded me-3" src="${element.thumbnail}" alt="${element.title}" />
      <div>
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <p>Price. ${element.price} USD | Discount. ${element.discountPercentage}% | Stock. ${element.stock}</p>
        <div class="d-flex gap-3 align-items-center">
          <div>
            <button class="btn btn-primary qty-btn" data-id="${element.id}" data-change="-1">-</button>
            <span class="fs-5 fw-bold mx-3">${qty}</span>
            <button class="btn btn-primary qty-btn" data-id="${element.id}" data-change="1">+</button>
          </div>
          <button class="btn btn-danger remove-btn" data-id="${element.id}">Remove</button>
        </div>
      </div>
    </div>`;
    cartContainer.appendChild(div);
  });

  // total calculation: discount first, then 18% GST on discounted amount
  const afterDiscount = subtotal - discountTotal;
  const gst = afterDiscount * GST_RATE;
  const grandTotal = afterDiscount + gst;

  const summary = document.createElement("div");
  summary.className = "card my-3 col-12 col-md-9 col-lg-7";
  summary.innerHTML = `<div class="card-body">
    <h5>Order Summary</h5>
    <p class="mb-1">Subtotal: ${subtotal.toFixed(2)} USD</p>
    <p class="mb-1">Discount: - ${discountTotal.toFixed(2)} USD</p>
    <p class="mb-1">GST (18%): + ${gst.toFixed(2)} USD</p>
    <hr />
    <h5>Total: ${grandTotal.toFixed(2)} USD</h5>
    <button class="btn btn-outline-danger mt-2" id="clear-cart">Clear cart</button>
  </div>`;
  cartContainer.appendChild(summary);
};

const changeQty = (id, change) => {
  let cartList = getCart();
  const item = cartList.find((p) => p.id === id);
  if (!item) return;

  const newQty = (item.qty || 1) + change;

  if (newQty < 1) {
    // quantity 1 se kam -> product remove
    cartList = cartList.filter((p) => p.id !== id);
  } else if (newQty > item.stock) {
    return;
  } else {
    item.qty = newQty;
  }

  saveCart(cartList);
  displayCarts();
};

const removeItem = (id) => {
  saveCart(getCart().filter((p) => p.id !== id));
  displayCarts();
};

// one listener for all buttons (+, -, Remove, Clear cart)
cartContainer.addEventListener("click", (e) => {
  const qtyBtn = e.target.closest(".qty-btn");
  const removeBtn = e.target.closest(".remove-btn");
  const clearBtn = e.target.closest("#clear-cart");

  if (qtyBtn) {
    changeQty(Number(qtyBtn.dataset.id), Number(qtyBtn.dataset.change));
  } else if (removeBtn) {
    removeItem(Number(removeBtn.dataset.id));
  } else if (clearBtn) {
    saveCart([]);
    displayCarts();
  }
});

displayCarts();
