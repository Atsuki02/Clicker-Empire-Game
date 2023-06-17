// making new user account class
class UserAccount {
  constructor(
    userName,
    money = 50000,
    click = 25,
    passedDays = 0,
    timeWage = 0,
    age = 20,
    burgerCount = 0
  ) {
    this.userName = userName;
    this.money = money;
    this.click = click;
    this.passedDays = passedDays;
    this.timeWage = timeWage;
    this.age = age;
    this.burgerCount = burgerCount;
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
    setInterval(() => {
      this.money += Math.floor(this.timeWage * 365);
      return this.money;
    }, 1000);
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
    setInterval(() => {
      this.passedDays++;
      // if 365 days is passed, increase age by 1
      if (this.passedDays % 365 === 0) {
        this.age++;
      }
      return this.passedDays;
    }, 1000);
  }
}

// making new item class
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

export { UserAccount, Item };
