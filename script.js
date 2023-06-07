// list of items
const items = [
  {
    itemName: "Flip machine",
    price: 15000,
    earning: 25,
    maxPurchase: 500,
    type: "ability",
    unit: "click",
    itemImg: "img/grill.png",
    itemCount: 0,
    index: 0,
  },
  {
    itemName: "ETF Stock",
    price: 300000,
    earning: 0.1,
    maxPurchase: Infinity,
    type: "investment",
    unit: "sec",
    itemImg: "img/chart.png",
    itemCount: 0,
    index: 1,
  },
  {
    itemName: "ETF Bonds",
    price: 300000,
    earning: 0.07,
    maxPurchase: Infinity,
    type: "investment",
    unit: "sec",
    itemImg: "img/chart.png",
    itemCount: 0,
    index: 2,
  },
  {
    itemName: "Lemonade Stand",
    price: 30000,
    earning: 30,
    maxPurchase: 1000,
    type: "real estate",
    unit: "sec",
    itemImg: "img/juice.png",
    itemCount: 0,
    index: 3,
  },
  {
    itemName: "Ice Cream Truck",
    price: 100000,
    earning: 120,
    maxPurchase: 500,
    type: "real estate",
    unit: "sec",
    itemImg: "img/ice-cream.png",
    itemCount: 0,
    index: 4,
  },
  {
    itemName: "House",
    price: 20000000,
    earning: 32000,
    maxPurchase: 100,
    type: "real estate",
    unit: "sec",
    itemImg: "img/home.png",
    itemCount: 0,
    index: 5,
  },
  {
    itemName: "Town House",
    price: 40000000,
    earning: 64000,
    maxPurchase: 100,
    type: "real estate",
    unit: "sec",
    itemImg: "img/modern-house.png",
    itemCount: 0,
    index: 6,
  },
  {
    itemName: "Mansion",
    price: 250000000,
    earning: 500000,
    maxPurchase: 20,
    type: "real estate",
    unit: "sec",
    itemImg: "img/condominium.png",
    itemCount: 0,
    index: 7,
  },
  {
    itemName: "Industrial Space",
    price: 1000000000,
    earning: 2200000,
    maxPurchase: 10,
    type: "real estate",
    unit: "sec",
    itemImg: "img/factory.png",
    itemCount: 0,
    index: 8,
  },
  {
    itemName: "Hotel Skyscraper",
    price: 10000000000,
    earning: 25000000,
    maxPurchase: 5,
    type: "real estate",
    unit: "sec",
    itemImg: "img/skyscrapers.png",
    itemCount: 0,
    index: 9,
  },
  {
    itemName: "Bullet-Speed Sky Railway",
    price: 10000000000000,
    earning: 30000000000,
    maxPurchase: 1,
    type: "real estate",
    unit: "sec",
    itemImg: "img/train.png",
    itemCount: 0,
    index: 10,
  },
];

// display or hide the content
function displayNone(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}

function displayBlock(ele) {
  ele.classList.remove("d-none");
  ele.classList.add("d-block");
}

//using name space to avoid conflicts
const config = {
  firstPage: document.getElementById("first-page"),
  secondPage: document.getElementById("second-page"),
  mainGamePage: document.getElementById("main-game-page"),
};

// making new class
class UserAccount {
  constructor(userName) {
    this.userName = userName;
    this.money = 30000000;
    this.click = 25;
    this.passedDays = 0;
    this.timeWage = 0;
    this.age = 20;
  }

  // subtract the money spent
  purchase(total) {
    this.money = this.money - total;
    return this.money;
  }

  // increse clicking wage
  increaseMoneyByClick() {
    this.money += this.click;
    return this.money;
  }

  // increase money as time passes
  increaseMoneyByTime() {
    this.money += Math.floor(this.timeWage * 365);
    return this.money;
  }

  //increse click wage
  increaseClickWage(totalClickWage) {
    this.click += totalClickWage;
    return this.click;
  }

  // increase time wage
  increaseTimeWage(totalTimeWage) {
    this.timeWage += totalTimeWage;
    return this.timeWage;
  }

  // increse the passed days counter
  increasePassedDays() {
    this.passedDays++;
    // if 365 days is passed, increase age by 1
    if (this.passedDays % 365 === 0) {
      this.age++;
    }
    return this.passedDays;
  }
}

class Item {
  constructor(
    itemName,
    price,
    earning,
    maxPurchase,
    type,
    unit,
    itemImg,
    itemCount,
    index
  ) {
    this.itemName = itemName;
    this.price = price;
    this.earning = earning;
    this.maxPurchase = maxPurchase;
    this.type = type;
    this.unit = unit;
    this.itemImg = itemImg;
    this.itemCount = itemCount;
    this.index = index;
  }

  // increase the total number of items
  increaseItemCount(itemTotal) {
    this.itemCount = this.itemCount + parseInt(itemTotal);
    return this.itemCount;
  }
}

const itemsObj = [];
items.forEach((item) => {
  itemsObj.push(
    new Item(
      item["itemName"],
      item["price"],
      item["earning"],
      item["maxPurchase"],
      item["type"],
      item["unit"],
      item["itemImg"],
      item["itemCount"],
      item["index"]
    )
  );
});

// console.log(itemsObj);

// making instance
function initializeUserAccount() {
  const inputUserName = document.querySelector(".input-user-name");
  let userAccount = new UserAccount(inputUserName.value);
  console.log(userAccount);
  displayNone(config.firstPage);
  console.log(config.mainGamePage);
  config.mainGamePage.append(mainGamePage(userAccount));
}

//display maingame page
function mainGamePage(userAccount) {
  const container = document.createElement("div");

  container.innerHTML = `
  <div id="second-page">
      <div class="main-page">
        <div class="left-section">
          <div class="burger-section">
            <div class="burger-info">
              <p class="burger-count">0 Burgers</p>
              <p class="burger-wage">one click ￥${userAccount.click}</p>
            </div>
            <div class="burger-image">
              <img src="img/burger.png" alt="" />
            </div>
          </div>
        </div>
        <div class="right-section">
          <div class="user-section">
            <div class="user-name">
              <p>${userAccount.userName}</p>
            </div>
            <div class="user-age">
              <p class="user-age-count">${userAccount.age} years old</p>
            </div>
            <div class="days-passed">
              <p class="days-counter">${userAccount.passedDays} days</p>
            </div>
            <div class="user-money">
              <p class="user-money-number">￥${userAccount.money}</p>
            </div>
          </div>
          <div class="item-section">
        
          </div>
        </div>
      </div>
      <div class="page-buttons">
        <button class="startover-btn">Start over</button>
        <button class="save-btn">Save</button>
      </div>
    </div>
  `;

  //Insert the list of items
  let itemSection = container.querySelector(".item-section");
  let itemList = document.createElement("ul");
  itemList.classList.add("items");
  itemSection.append(itemList);

  for (let i = 0; i < itemsObj.length; i++) {
    itemList.innerHTML += `
                    <li class="item" data-index="${itemsObj[i].index}">
                        <img src="${itemsObj[i].itemImg}" alt="" />
                        <div class="item-info">
                          <p class="item-name">${itemsObj[i].itemName}</p>
                          <p class="item-price">￥${itemsObj[i].price}</p>
                        </div>
                        <div class="item-count">
                          <p class="item-counter">${itemsObj[i].itemCount}</p>
                          <p class="item-click">￥${itemsObj[i].earning}/${itemsObj[i].unit}</p>
                        </div>
                    </li>
            `;
  }

  const daysCounter = container.querySelector(".days-counter");
  const userAgeCount = container.querySelector(".user-age-count");

  setInterval(() => {
    // When 1 second is passed, increse days by 1
    userAccount.increasePassedDays();
    // When 1 second is passed, increase money by time wage
    userAccount.increaseMoneyByTime();
    daysCounter.innerHTML = `
         ${userAccount.passedDays} days
         `;
    userMoneyNumber.innerHTML = `
         ￥${userAccount.money}
         `;
    // When 365days is passed, increase age by 1
    userAgeCount.innerHTML = `
          ${userAccount.age} years old
    `;
  }, 1000);

  //add click event to each item
  let item = itemList.querySelectorAll(".item");
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
      itemSection.innerHTML = "";
      displayPurchasePage(item[i], itemSection, itemsObj[i], userAccount);
    });
  }

  // When burger is clicked, increase burger counter
  let burgerCount = container.querySelector(".burger-count");
  let burgerImage = container.querySelector(".burger-image");
  let userMoneyNumber = container.querySelector(".user-money-number");
  let burgerCounter = 0;
  burgerImage.addEventListener("click", function () {
    burgerCounter++;
    burgerCount.innerHTML = `
    ${burgerCounter} Burgers
    `;
    userAccount.increaseMoneyByClick();
    userMoneyNumber.innerHTML = `
    ￥${userAccount.money}
    `;
  });

  // add to the event to save data
  const startoverBtn = container.querySelector(".startover-btn");
  const saveBtn = container.querySelector(".save-btn");
  startoverBtn.addEventListener("click", function () {
    confirm("Are you sure to reset all data?");
    localStorage.removeItem("username");
  });
  saveBtn.addEventListener("click", function () {
    localStorage.setItem("username", userAccount.userName);
    alert("Your data is saved. Put the same name next time");
  });

  return container;
}

//display purchase page
function displayPurchasePage(clickedItem, itemSection, itemObj, userAccount) {
  itemSection.innerHTML = `
  <div class="purchase-section">
                <div class="purchase-wrapper">
                  <div class="purchase-info">
                    <h2>${itemObj.itemName}</h2>
                    <p>Max purchases: ${itemObj.maxPurchase}</p>
                    <p>Price: ￥${itemObj.price}</p>
                    <p>Get ￥${itemObj.earning} /${itemObj.unit}</p>
                  </div>
                  <div class="item-img-info">
                    <img src="${itemObj.itemImg}" alt="" />
                  </div>
                </div>
                <div class="purchase-counter">
                  <p class="purchase-question">How many would you like to buy?</p>
                  <input type="number" placeholder="0" class="purchase-input" />
                  <p class="purchase-total-price">total: ￥0</p>
                </div>
                <div class="buttons">
                  <button class="goback-btn">Go Back</button>
                  <button class="purchase-btn">Purchase</button>
                </div>
              </div>
  `;

  //add change event to total price
  let purchaseInput = itemSection.querySelector(".purchase-input");
  purchaseInput.addEventListener("change", function () {
    let purchaseTotalPrice = itemSection.querySelector(".purchase-total-price");
    // let total = purchaseInput.value * itemObj.price;
    purchaseTotalPrice.innerHTML = `
    total: ￥${priceSummation(purchaseInput, itemObj)}
    `;
  });

  // add click event to goback btn
  let backBtn = itemSection.querySelector(".goback-btn");
  backBtn.addEventListener("click", function () {
    config.mainGamePage.innerHTML = "";
    backReturn(userAccount);
  });

  // add click event to purchase btn
  let purchaseBtn = itemSection.querySelector(".purchase-btn");
  purchaseBtn.addEventListener("click", function () {
    // check if input is over 0 and input isn't over the maximum
    if (purchaseInput.value <= 0 || purchaseInput.value > itemObj.maxPurchase) {
      alert("Put the valid the number");
      // check if number of items is below the maximum
    } else if (itemObj.maxPurchase <= itemObj.itemCount) {
      alert("You can't buy anymore");
      // check if user has enough money
    } else {
      if (priceSummation(purchaseInput, itemObj) > userAccount.money) {
        alert("You don't have enough money.");
        // if the user meets the conditions above, proceed to the purchase
      } else {
        config.mainGamePage.innerHTML = "";
        let index = clickedItem.dataset.index;
        purchaseItem(
          userAccount,
          priceSummation(purchaseInput, itemObj),
          purchaseInput,
          index,
          wageSummation(purchaseInput, itemObj),
          investmentProfitSummation(purchaseInput, itemObj)
        );
      }
    }
  });

  return itemSection;
}

// calculate total price
function priceSummation(purchaseInput, itemObj) {
  let total = 0;
  total = purchaseInput.value * itemObj.price;
  return total;
}

// calculate total click or time wage
function wageSummation(purchaseInput, itemObj) {
  let total = 0;
  total = purchaseInput.value * itemObj.earning;
  return total;
}

// calculate total investment profit
function investmentProfitSummation(purchaseInput, itemObj) {
  let total = 0;
  total = purchaseInput.value * itemObj.earning;
  return total;
}

// go back to the main page
function backReturn(userAccount) {
  config.mainGamePage.append(mainGamePage(userAccount));
}

//purchase items and go back to the main page
function purchaseItem(
  userAccount,
  priceTotal,
  purchaseInput,
  index,
  wageTotal,
  investmentTotalProfit
) {
  // display current amount of total money
  userAccount.purchase(priceTotal);
  // display current numbers of items
  itemsObj[index].increaseItemCount(purchaseInput.value);
  // increase click or time wage
  if (itemsObj[index].type === "ability") {
    userAccount.increaseClickWage(wageTotal);
  } else if (itemsObj[index].type === "real estate") {
    userAccount.increaseTimeWage(wageTotal);
  } else if (itemsObj[index].type === "investment") {
    userAccount.increaseTimeWage(investmentTotalProfit);
  }
  // display the main game page
  config.mainGamePage.append(mainGamePage(userAccount));
}
