// list of items
const items = [
  {
    itemName: "Flip machine",
    price: 15000,
    earning: 25,
    maxPurchase: 500,
    itemImg: "img/grill.png",
  },
  {
    itemName: "ETF Stock",
    price: 300000,
    earning: 0.1,
    maxPurchase: Infinity,
    itemImg: "img/chart.png",
  },
  {
    itemName: "ETF Bonds",
    price: 300000,
    earning: 0.07,
    maxPurchase: Infinity,
    itemImg: "img/chart.png",
  },
  {
    itemName: "Lemonade Stand",
    price: 30000,
    earning: 30,
    maxPurchase: 1000,
    itemImg: "img/juice.png",
  },
  {
    itemName: "Ice Cream Truck",
    price: 100000,
    earning: 120,
    maxPurchase: 500,
    itemImg: "img/ice-cream.png",
  },
  {
    itemName: "House",
    price: 20000000,
    earning: 32000,
    maxPurchase: 100,
    itemImg: "img/home.png",
  },
  {
    itemName: "Town House",
    price: 40000000,
    earning: 64000,
    maxPurchase: 100,
    itemImg: "img/modern-house.png",
  },
  {
    itemName: "Mansion",
    price: 250000000,
    earning: 500000,
    maxPurchase: 20,
    itemImg: "img/condominium.png",
  },
  {
    itemName: "Industrial Space",
    price: 1000000000,
    earning: 2200000,
    maxPurchase: 10,
    itemImg: "img/factory.png",
  },
  {
    itemName: "Hotel Skyscraper",
    price: 10000000000,
    earning: 25000000,
    maxPurchase: 5,
    itemImg: "img/skyscrapers.png",
  },
  {
    itemName: "Bullet-Speed Sky Railway",
    price: 10000000000000,
    earning: 30000000000,
    maxPurchase: 1,
    itemImg: "img/train.png",
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
  }
}

class Item {
  constructor(itemName, price, earning, maxPurchase, itemImg) {
    this.itemName = itemName;
    this.price = price;
    this.earning = earning;
    this.maxPurchase = maxPurchase;
    this.itemImg = itemImg;
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
      item["itemImg"]
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
              <p class="burger-wage">one click ￥25</p>
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
              <p>20 years old</p>
            </div>
            <div class="days-passed">
              <p>0 days</p>
            </div>
            <div class="user-money">
              <p>￥50,000</p>
            </div>
          </div>
          <div class="item-section">
            <ul class="items">
            </ul> 
          </div>
        </div>
      </div>
    </div>
  `;

  //Insert the list of items
  let itemList = container.querySelector(".items");
  for (let i = 0; i < itemsObj.length; i++) {
    itemList.innerHTML += `
                    <li class="item">
                        <img src="${itemsObj[i].itemImg}" alt="" />
                        <div class="item-info">
                          <p class="item-name">${itemsObj[i].itemName}</p>
                          <p class="item-price">￥${itemsObj[i].price}</p>
                        </div>
                        <div class="item-count">
                          <p class="item-counter">0</p>
                          <p class="item-click">￥${itemsObj[i].earning}/clcik</p>
                        </div>
                    </li>
            `;
  }

  return container;
}
