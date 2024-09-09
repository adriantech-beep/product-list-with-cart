"use strict";

const wafflesObject = {
  waffleImage: {
    thumbnail: "images/image-waffle-thumbnail.jpg",
    mobile: "images/image-waffle-mobile.jpg",
    tablet: "images/image-waffle-tablet.jpg",
    desktop: "images/image-waffle-desktop.jpg",
  },
  waffle: "Waffle with Berries",
  category: "Waffle",
  price: 6.5,
};

let waffleOrderCount = 0;
const wafflePrice = wafflesObject.price;
let waffleTotal = 0;
//////////////////////////////////////////////////////////////////////////
const cremeObject = {
  image: {
    thumbnail: "images/image-creme-brulee-thumbnail.jpg",
    mobile: "images/image-creme-brulee-mobile.jpg",
    tablet: "images/image-creme-brulee-tablet.jpg",
    desktop: "images/image-creme-brulee-desktop.jpg",
  },
  name: "Vanilla Bean Crème Brûlée",
  category: "Crème Brûlée",
  price: 7.0,
};
let cremeOrderCount = 0;
const cremePrice = cremeObject.price;
let cremeTotal = 0;
//////////////////////////////////////////////////////////////////////////
const macaronObject = {
  image: {
    thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
    mobile: "./assets/images/image-macaron-mobile.jpg",
    tablet: "./assets/images/image-macaron-tablet.jpg",
    desktop: "./assets/images/image-macaron-desktop.jpg",
  },
  name: "Macaron Mix of Five",
  category: "Macaron",
  price: 8.0,
};
let macaronOrderCount = 0;
const macaronPrice = macaronObject.price;
let macaronTotal = 0;
//////////////////////////////////////////////////////////////////////////
const tiramisuObject = {
  image: {
    thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
    mobile: "./assets/images/image-tiramisu-mobile.jpg",
    tablet: "./assets/images/image-tiramisu-tablet.jpg",
    desktop: "./assets/images/image-tiramisu-desktop.jpg",
  },
  name: "Classic Tiramisu",
  category: "Tiramisu",
  price: 5.5,
};
let tiramisuOrderCount = 0;
const tiramisuPrice = tiramisuObject.price;
let tiramisuTotal = 0;
/////////////////////////////////////////////////////////////////////////
const baklavaObject = {
  image: {
    thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
    mobile: "./assets/images/image-baklava-mobile.jpg",
    tablet: "./assets/images/image-baklava-tablet.jpg",
    desktop: "./assets/images/image-baklava-desktop.jpg",
  },
  name: "Pistachio Baklava",
  category: "Baklava",
  price: 4.0,
};
let baklavaOrderCount = 0;
const baklavaPrice = baklavaObject.price;
let baklavaTotal = 0;
/////////////////////////////////////////////////////////////////////////
const meringueObject = {
  image: {
    thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
    mobile: "./assets/images/image-meringue-mobile.jpg",
    tablet: "./assets/images/image-meringue-tablet.jpg",
    desktop: "./assets/images/image-meringue-desktop.jpg",
  },
  name: "Lemon Meringue Pie",
  category: "Pie",
  price: 5.0,
};
let meringueOrderCount = 0;
const meringuePrice = meringueObject.price;
let meringueTotal = 0;
//////////////////////////////////////////////////////////////////////
const cakeObject = {
  image: {
    thumbnail: "./assets/images/image-cake-thumbnail.jpg",
    mobile: "./assets/images/image-cake-mobile.jpg",
    tablet: "./assets/images/image-cake-tablet.jpg",
    desktop: "./assets/images/image-cake-desktop.jpg",
  },
  name: "Red Velvet Cake",
  category: "Cake",
  price: 4.5,
};
let cakeOrderCount = 0;
const cakePrice = cakeObject.price;
let cakeTotal = 0;
/////////////////////////////////////////////////////////////////////
const brownieObject = {
  image: {
    thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
    mobile: "./assets/images/image-brownie-mobile.jpg",
    tablet: "./assets/images/image-brownie-tablet.jpg",
    desktop: "./assets/images/image-brownie-desktop.jpg",
  },
  name: "Salted Caramel Brownie",
  category: "Brownie",
  price: 4.5,
};
let brownieOrderCount = 0;
const browniePrice = brownieObject.price;
let brownieTotal = 0;
/////////////////////////////////////////////////////////////////
const pannaObject = {
  image: {
    thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
    mobile: "./assets/images/image-panna-cotta-mobile.jpg",
    tablet: "./assets/images/image-panna-cotta-tablet.jpg",
    desktop: "./assets/images/image-panna-cotta-desktop.jpg",
  },
  name: "Vanilla Panna Cotta",
  category: "Panna Cotta",
  price: 6.5,
};
let pannaOrderCount = 0;
const pannaPrice = pannaObject.price;
let pannaTotal = 0;

/////////////////////////////////////////////////////////////////
//This is for the add cart buttons
const orderCount = document.querySelectorAll(".order-count");
const addCartBtn = document.querySelectorAll(".add-cart");

addCartBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.add("hide-cart");
    orderCount[index].classList.remove("hidden");
  });
});

const emptyCartSection = document.querySelector(".empty-cart-section");
/////////////////////////////////////////////////////////////////////
///For waffles
const waffleMinus = document.getElementById("waffle-minus");
const wafflePlus = document.getElementById("waffle-plus");
const waffleCountElement = document.getElementById("waffle-count");
const waffleOrderListContainer = document.getElementById(
  "waffle-order-list-container"
);

////////////////////////////////////////////////////////////////////
///For creme
const cremeMinus = document.getElementById("creme-minus");
const cremePlus = document.getElementById("creme-plus");
const cremeCountElement = document.getElementById("creme-count");
const cremeOrderListContainer = document.getElementById(
  "creme-order-list-container"
);
///////////////////////////////////////////////////////////////////
///For macaron
const macaronMinus = document.getElementById("macaron-minus");
const macaronPlus = document.getElementById("macaron-plus");
const macaronCountElement = document.getElementById("macaron-count");
const macaronOrderListContainer = document.getElementById(
  "macaron-order-list-container"
);
///////////////////////////////////////////////////////////////////////
///For tiramisu
const tiramisuMinus = document.getElementById("tiramisu-minus");
const tiramisuPlus = document.getElementById("tiramisu-plus");
const tiramisuCountElement = document.getElementById("tiramisu-count");
const tiramisuOrderListContainer = document.getElementById(
  "tiramisu-order-list-container"
);
//////////////////////////////////////////////////////////////////////
///For baklava
const baklavaMinus = document.getElementById("baklava-minus");
const baklavaPlus = document.getElementById("baklava-plus");
const baklavaCountElement = document.getElementById("baklava-count");
const baklavaOrderListContainer = document.getElementById(
  "baklava-order-list-container"
);
//////////////////////////////////////////////////////////////////////
///For meringue
const meringueMinus = document.getElementById("meringue-minus");
const meringuePlus = document.getElementById("meringue-plus");
const meringueCountElement = document.getElementById("meringue-count");
const meringueOrderListContainer = document.getElementById(
  "meringue-order-list-container"
);

/////////////////////////////////////////////////////////////////////
///For cake
const cakeMinus = document.getElementById("cake-minus");
const cakePlus = document.getElementById("cake-plus");
const cakeCountElement = document.getElementById("cake-count");
const cakeOrderListContainer = document.getElementById(
  "cake-order-list-container"
);
///////////////////////////////////////////////////////////////////////
///For brownie
const brownieMinus = document.getElementById("brownie-minus");
const browniePlus = document.getElementById("brownie-plus");
const brownieCountElement = document.getElementById("brownie-count");
const brownieOrderListContainer = document.getElementById(
  "brownie-order-list-container"
);
/////////////////////////////////////////////////////////////////////////
//For panna
const pannaMinus = document.getElementById("panna-minus");
const pannaPlus = document.getElementById("panna-plus");
const pannaCountElement = document.getElementById("panna-count");
const pannaOrderListContainer = document.getElementById(
  "panna-order-list-container"
);

/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
const waffles = document.querySelector(".waffles");
const cremes = document.querySelector(".cremes");
const macarons = document.querySelector(".macarons");
const tiramisus = document.querySelector(".tiramisus");
const baklavas = document.querySelector(".baklavas");
const meringues = document.querySelector(".meringues");
const cakes = document.querySelector(".cakes");
const brownies = document.querySelector(".brownies");
const pannas = document.querySelector(".pannas");
///////////////////////////////////////////////////////////////////////

let totalFoodCost = 0;
let orderListModal = "";
let orderCompletedModalContent = "";
function updateOrderTotal(
  itemType,
  orderCount,
  price,
  orderListContainer,
  countElement
) {
  const orderTotal = orderCount * price;
  let orderLists = `
    <div class="order-list">
      <img class="close-img" src="images/icon-remove-item.svg" alt="" />
      <h6>${itemType}</h6>
      <div class="price-details-section">
        <h5 class="order-counts">${orderCount}x</h5>
        <h5 class="pricing">@$${price}</h5>
        <h5 class="total-pricing">$${orderTotal.toFixed(2)}</h5>
      </div>
    </div>
  `;

  orderListContainer.innerHTML = orderLists;
  orderListModal = orderListContainer;
  updateTotalFoodCost();
  //////////////////////////////////////////////////////////////////
  //Area for deletebuttons
  const deleteBtns = orderListContainer.querySelectorAll(".close-img");
  deleteBtns.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.remove();
      if (itemType === "Waffle with berries") {
        waffleOrderCount = 0;
        updateTotalFoodCost();
        waffleCountElement.textContent = waffleOrderCount;
      } else if (itemType === "Vanilla Bean Crème Brûlée") {
        cremeOrderCount = 0;
        updateTotalFoodCost();
        cremeCountElement.textContent = cremeOrderCount;
      } else if (itemType === "Macaron Mix of Five") {
        macaronOrderCount = 0;
        updateTotalFoodCost();
        macaronCountElement.textContent = macaronOrderCount;
      } else if (itemType === "Classic Tiramisu") {
        tiramisuOrderCount = 0;
        updateTotalFoodCost();
        tiramisuCountElement.textContent = tiramisuOrderCount;
      } else if (itemType === "Pistachio Baklava") {
        baklavaOrderCount = 0;
        updateTotalFoodCost();
        baklavaCountElement.textContent = baklavaOrderCount;
      } else if (itemType === "Lemon Meringue Pie") {
        meringueOrderCount = 0;
        updateTotalFoodCost();
        meringueCountElement.textContent = meringueOrderCount;
      } else if (itemType === "Red Velvet Cake") {
        cakeOrderCount = 0;
        updateTotalFoodCost();
        cakeCountElement.textContent = cakeOrderCount;
      } else if (itemType === "Salted Caramel Brownie") {
        brownieOrderCount = 0;
        updateTotalFoodCost();
        brownieCountElement.textContent = brownieOrderCount;
      } else if (itemType === "Vanilla Panna Cotta") {
        pannaOrderCount = 0;
        updateTotalFoodCost();
        pannaCountElement.textContent = pannaOrderCount;
      }
      if (
        waffleOrderCount === 0 &&
        cremeOrderCount === 0 &&
        macaronOrderCount === 0 &&
        tiramisuOrderCount === 0 &&
        baklavaOrderCount === 0 &&
        meringueOrderCount === 0 &&
        cakeOrderCount === 0 &&
        brownieOrderCount === 0 &&
        pannaOrderCount === 0
      ) {
        emptyCartSection.classList.remove("hidden");
        updateTotalFoodCost();
        waffles.classList.add("hidden");
        cremes.classList.add("hidden");
        macarons.classList.add("hidden");
        tiramisus.classList.add("hidden");
        baklavas.classList.add("hidden");
        meringues.classList.add("hidden");
        cakes.classList.add("hidden");
        brownies.classList.add("hidden");
        pannas.classList.add("hidden");
      }
    });
  });
  const confirmBtn = document.getElementById("confirm-btn");
  const orderCompletedModal = document.querySelector(".order-completed-modal");
  const overlay = document.querySelector(".overlay");

  confirmBtn.addEventListener("click", function () {
    orderCompletedModal.classList.remove("hidden");
    orderCompletedModalContent = "";
    overlay.classList.remove("hidden");
    let totalCost = 0;
    const orderItems = [
      {
        itemType: "Waffle with berries",
        orderCount: waffleOrderCount,
        price: wafflePrice,
        imageUrl: "images/image-waffle-thumbnail.jpg",
      },
      {
        itemType: "Vanilla Bean Crème Brûlée",
        orderCount: cremeOrderCount,
        price: cremePrice,
        imageUrl: "images/image-creme-brulee-thumbnail.jpg",
      },
      {
        itemType: "Macaron Mix of Five",
        orderCount: macaronOrderCount,
        price: macaronPrice,
        imageUrl: "images/image-macaron-thumbnail.jpg",
      },
      {
        itemType: "Classic Tiramisu",
        orderCount: tiramisuOrderCount,
        price: tiramisuPrice,
        imageUrl: "images/image-tiramisu-thumbnail.jpg",
      },
      {
        itemType: "Pistachio Baklava",
        orderCount: baklavaOrderCount,
        price: baklavaPrice,
        imageUrl: "images/image-baklava-thumbnail.jpg",
      },
      {
        itemType: "Lemon Meringue Pie",
        orderCount: meringueOrderCount,
        price: meringuePrice,
        imageUrl: "images/image-meringue-thumbnail.jpg",
      },
      {
        itemType: "Red Velvet Cake",
        orderCount: cakeOrderCount,
        price: cakePrice,
        imageUrl: "images/image-cake-thumbnail.jpg",
      },
      {
        itemType: "Salted Caramel Brownie",
        orderCount: brownieOrderCount,
        price: browniePrice,
        imageUrl: "images/image-brownie-thumbnail.jpg",
      },
      {
        itemType: "Vanilla Panna Cotta",
        orderCount: pannaOrderCount,
        price: pannaPrice,
        imageUrl: "images/image-panna-cotta-thumbnail.jpg",
      },
    ];

    orderItems.forEach((item) => {
      if (item.orderCount > 0) {
        const orderItemHTML = `
          <div class="order-item">
            <img class="thumbnail" src="${item.imageUrl}" alt="${
          item.itemType
        }">
        <div class="food-name-price">
        <div class="food-name">
            <h6>${item.itemType}</h6>
        </div>
            <div class="price-details-section">
              <h5 class="order-counts">${item.orderCount}x</h5>
              <h5 class="pricing">@$${item.price}</h5>
              <h5 class="total-pricing">$${(
                item.orderCount * item.price
              ).toFixed(1)}</h5>
            </div>
            </div>
          </div>
        `;
        orderCompletedModalContent += orderItemHTML;
        totalCost += item.orderCount * item.price;
      }
    });

    if (orderCompletedModalContent === "") {
      orderCompletedModalContent = "<p>No items in order.</p>";
    }

    orderCompletedModal.innerHTML = `
      <div class="order-confirmed">
        <img src="images/icon-order-confirmed.svg" alt="">
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        ${orderCompletedModalContent}
        <div class="total-cost-section">
          <h6>Order total:</h6>
          <h4>$${totalCost.toFixed(2)}</h4>
        </div>
        <div class="start-new-order">
          <button id="start-new-order-btn" href="index.html"><span id="new-order-btn">Start new order</span></button>
        </div>
      </div>
    `;
    document
      .getElementById("start-new-order-btn")
      .addEventListener("click", function () {
        window.location.href = "index.html";
      });
    overlay.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  });
}

//////////////////////////////////////////////////////////////////////////
const totalAmountBox = document.getElementById("total-amount");
const foodCost = document.querySelector(".food-cost");
//Function for total cost
function updateTotalFoodCost() {
  waffleTotal = waffleOrderCount * wafflePrice;
  cremeTotal = cremeOrderCount * cremePrice;
  macaronTotal = macaronOrderCount * macaronPrice;
  tiramisuTotal = tiramisuOrderCount * tiramisuPrice;
  baklavaTotal = baklavaOrderCount * baklavaPrice;
  meringueTotal = meringueOrderCount * meringuePrice;
  cakeTotal = cakeOrderCount * cakePrice;
  brownieTotal = brownieOrderCount * browniePrice;
  pannaTotal = pannaOrderCount * pannaPrice;

  totalFoodCost =
    waffleTotal +
    cremeTotal +
    macaronTotal +
    tiramisuTotal +
    baklavaTotal +
    meringueTotal +
    cakeTotal +
    brownieTotal +
    pannaTotal;
  ///////////////////////////////////////////////////////////////////
  //For totalamount
  let totalAmount = `
  <div class="total-amount-box">
  <p>Order total</p>
  <h5 class="total-pricing">$${totalFoodCost.toFixed(2)}</h5>
  </div>
  <div class="carbon-box">
  <img src="images/icon-carbon-neutral.svg" alt="">
  <p>This is a <span>carbon neutral </span>delivery</p>
  </div>
   <div class="confirm-btn"></div>
            <button id="confirm-btn" ><span id="confirm">Confirm Order</span></button>
    </div>
`;
  totalAmountBox.innerHTML = totalAmount;
  ////////////////////////////////////////////////////////////////////
  //For totalcount
  let totalCount = [
    waffleOrderCount,
    cremeOrderCount,
    macaronOrderCount,
    tiramisuOrderCount,
    baklavaOrderCount,
    meringueOrderCount,
    cakeOrderCount,
    brownieOrderCount,
    pannaOrderCount,
  ].reduce((a, b) => a + b, 0);
  document.getElementById("order-list-count").textContent = totalCount;
  if (totalCount === 0) {
    emptyCartSection.classList.remove("hidden");
    foodCost.classList.add("hidden");
  } else {
    foodCost.classList.remove("hidden");
  }
}
////////////////////////////////////////////////////////////////////////////
//For waffle
wafflePlus.addEventListener("click", () => {
  waffleOrderCount++;
  waffleCountElement.textContent = waffleOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Waffle with berries",
    waffleOrderCount,
    wafflePrice,
    waffleOrderListContainer,
    waffleCountElement
  );
  waffles.classList.remove("hidden");
});

waffleMinus.addEventListener("click", () => {
  if (waffleOrderCount > 0) {
    waffleOrderCount--;
    waffleCountElement.textContent = waffleOrderCount;
    updateOrderTotal(
      "Vanilla Bean Crème Brûlée",
      waffleOrderCount,
      wafflePrice,
      waffleOrderListContainer,
      waffleCountElement
    );
  }
  if (waffleOrderCount === 0) {
    waffles.classList.add("hidden");
  }
});

///////////////////////////////////////////////////////////////
//For creme
cremePlus.addEventListener("click", () => {
  cremeOrderCount++;
  cremeCountElement.textContent = cremeOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Vanilla Bean Crème Brûlée",
    cremeOrderCount,
    cremePrice,
    cremeOrderListContainer,
    cremeCountElement
  );
  cremes.classList.remove("hidden");
});

cremeMinus.addEventListener("click", () => {
  if (cremeOrderCount > 0) {
    cremeOrderCount--;
    cremeCountElement.textContent = cremeOrderCount;
    updateOrderTotal(
      "Vanilla Bean Crème Brûlée",
      cremeOrderCount,
      cremePrice,
      cremeOrderListContainer,
      cremeCountElement
    );
  }
  if (cremeOrderCount === 0) {
    cremes.classList.add("hidden");
  }
});

//////////////////////////////////////////////////////////////////
//For macaron
macaronPlus.addEventListener("click", () => {
  macaronOrderCount++;
  macaronCountElement.textContent = macaronOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Macaron Mix of Five",
    macaronOrderCount,
    macaronPrice,
    macaronOrderListContainer,
    macaronCountElement
  );
  macarons.classList.remove("hidden");
});

macaronMinus.addEventListener("click", () => {
  if (macaronOrderCount > 0) {
    macaronOrderCount--;
    macaronCountElement.textContent = macaronOrderCount;
    updateOrderTotal(
      "Macaron Mix of Five",
      macaronOrderCount,
      macaronPrice,
      macaronOrderListContainer,
      macaronCountElement
    );
  }
  if (macaronOrderCount === 0) {
    macarons.classList.add("hidden");
  }
});
/////////////////////////////////////////////////////////////////////////////////////
//For tiramisu
tiramisuPlus.addEventListener("click", () => {
  tiramisuOrderCount++;
  tiramisuCountElement.textContent = tiramisuOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Classic Tiramisu",
    tiramisuOrderCount,
    tiramisuPrice,
    tiramisuOrderListContainer,
    tiramisuCountElement
  );
  tiramisus.classList.remove("hidden");
});

tiramisuMinus.addEventListener("click", () => {
  if (tiramisuOrderCount > 0) {
    tiramisuOrderCount--;
    tiramisuCountElement.textContent = tiramisuOrderCount;
    updateOrderTotal(
      "Classic Tiramisu",
      tiramisuOrderCount,
      tiramisuPrice,
      tiramisuOrderListContainer,
      tiramisuCountElement
    );
  }
  if (tiramisuOrderCount === 0) {
    tiramisus.classList.add("hidden");
  }
});
///////////////////////////////////////////////////////////
///For baklava
baklavaPlus.addEventListener("click", () => {
  baklavaOrderCount++;
  baklavaCountElement.textContent = baklavaOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Pistachio Baklava",
    baklavaOrderCount,
    baklavaPrice,
    baklavaOrderListContainer,
    baklavaCountElement
  );
  baklavas.classList.remove("hidden");
});

baklavaMinus.addEventListener("click", () => {
  if (baklavaOrderCount > 0) {
    baklavaOrderCount--;
    baklavaCountElement.textContent = baklavaOrderCount;
    updateOrderTotal(
      "Pistachio Baklava",
      baklavaOrderCount,
      baklavaPrice,
      baklavaOrderListContainer,
      baklavaCountElement
    );
  }
  if (baklavaOrderCount === 0) {
    baklavas.classList.add("hidden");
  }
});

/////////////////////////////////////////////////////////////////////////
///For meringue
meringuePlus.addEventListener("click", () => {
  meringueOrderCount++;
  meringueCountElement.textContent = meringueOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Lemon Meringue Pie",
    meringueOrderCount,
    meringuePrice,
    meringueOrderListContainer,
    meringueCountElement
  );
  meringues.classList.remove("hidden");
});

meringueMinus.addEventListener("click", () => {
  if (meringueOrderCount > 0) {
    meringueOrderCount--;
    meringueCountElement.textContent = meringueOrderCount;
    updateOrderTotal(
      "Lemon Meringue Pie",
      meringueOrderCount,
      meringuePrice,
      meringueOrderListContainer,
      meringueCountElement
    );
  }
  if (meringueOrderCount === 0) {
    meringues.classList.add("hidden");
  }
});
//////////////////////////////////////////////////////////////////////////
//For cakes
cakePlus.addEventListener("click", () => {
  cakeOrderCount++;
  cakeCountElement.textContent = cakeOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Red Velvet Cake",
    cakeOrderCount,
    cakePrice,
    cakeOrderListContainer,
    cakeCountElement
  );
  cakes.classList.remove("hidden");
});

cakeMinus.addEventListener("click", () => {
  if (cakeOrderCount > 0) {
    cakeOrderCount--;
    cakeCountElement.textContent = cakeOrderCount;
    updateOrderTotal(
      "Red Velvet Cake",
      cakeOrderCount,
      cakePrice,
      cakeOrderListContainer,
      cakeCountElement
    );
  }
  if (cakeOrderCount === 0) {
    cakes.classList.add("hidden");
  }
});
//////////////////////////////////////////////////////////////////
//For brownies
browniePlus.addEventListener("click", () => {
  brownieOrderCount++;
  brownieCountElement.textContent = brownieOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Salted Caramel Brownie",
    brownieOrderCount,
    browniePrice,
    brownieOrderListContainer,
    brownieCountElement
  );
  brownies.classList.remove("hidden");
});

brownieMinus.addEventListener("click", () => {
  if (brownieOrderCount > 0) {
    brownieOrderCount--;
    brownieCountElement.textContent = brownieOrderCount;
    updateOrderTotal(
      "Salted Caramel Brownie",
      brownieOrderCount,
      browniePrice,
      brownieOrderListContainer,
      brownieCountElement
    );
  }
  if (brownieOrderCount === 0) {
    brownies.classList.add("hidden");
  }
});
//////////////////////////////////////////////////////////
///For pannas
pannaPlus.addEventListener("click", () => {
  pannaOrderCount++;
  pannaCountElement.textContent = pannaOrderCount;
  emptyCartSection.classList.add("hidden");
  updateOrderTotal(
    "Vanilla Panna Cotta",
    pannaOrderCount,
    pannaPrice,
    pannaOrderListContainer,
    pannaCountElement
  );
  pannas.classList.remove("hidden");
});

pannaMinus.addEventListener("click", () => {
  if (pannaOrderCount > 0) {
    pannaOrderCount--;
    pannaCountElement.textContent = pannaOrderCount;
    updateOrderTotal(
      "Vanilla Panna Cotta",
      pannaOrderCount,
      pannaPrice,
      pannaOrderListContainer,
      pannaCountElement
    );
  }
  if (pannaOrderCount === 0) {
    pannas.classList.add("hidden");
  }
});
////////////////////////////////////////////////////////////
