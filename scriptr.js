const battery = [
  {
    batteryName: "WKL-78",
    capacityAh: 2.3,
    voltage: 14.4,
    maxDraw: 3.2,
    endVoltage: 10,
  },
  {
    batteryName: "WKL-140",
    capacityAh: 4.5,
    voltage: 14.4,
    maxDraw: 9.2,
    endVoltage: 5,
  },
  {
    batteryName: "Wmacro-78",
    capacityAh: 2.5,
    voltage: 14.5,
    maxDraw: 10,
    endVoltage: 5,
  },
  {
    batteryName: "Wmacro-140",
    capacityAh: 3.6,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 5,
  },
  {
    batteryName: "IOP-E78",
    capacityAh: 6.6,
    voltage: 14.4,
    maxDraw: 10.5,
    endVoltage: 8,
  },
  {
    batteryName: "IOP-E140",
    capacityAh: 9.9,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 10,
  },
  {
    batteryName: "IOP-E188",
    capacityAh: 13.2,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 11,
  },
  {
    batteryName: "RYN-C65",
    capacityAh: 4.9,
    voltage: 14.8,
    maxDraw: 4.9,
    endVoltage: 11,
  },
  {
    batteryName: "RYN-C85",
    capacityAh: 6.3,
    voltage: 14.4,
    maxDraw: 6.3,
    endVoltage: 12,
  },
  {
    batteryName: "RYN-C140",
    capacityAh: 9.8,
    voltage: 14.8,
    maxDraw: 10,
    endVoltage: 12,
  },
  {
    batteryName: "RYN-C290",
    capacityAh: 19.8,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 12,
  },
];
const camera = [
  {
    brand: "Cakon",
    model: "ABC 3000M",
    powerConsumptionWh: 35.5,
  },
  {
    brand: "Cakon",
    model: "ABC 5000M",
    powerConsumptionWh: 37.2,
  },
  {
    brand: "Cakon",
    model: "ABC 7000M",
    powerConsumptionWh: 39.7,
  },
  {
    brand: "Cakon",
    model: "ABC 9000M",
    powerConsumptionWh: 10.9,
  },
  {
    brand: "Cakon",
    model: "ABC 9900M",
    powerConsumptionWh: 15.7,
  },
  {
    brand: "Go MN",
    model: "UIK 110C",
    powerConsumptionWh: 62.3,
  },
  {
    brand: "Go MN",
    model: "UIK 210C",
    powerConsumptionWh: 64.3,
  },
  {
    brand: "Go MN",
    model: "UIK 230C",
    powerConsumptionWh: 26.3,
  },
  {
    brand: "Go MN",
    model: "UIK 250C",
    powerConsumptionWh: 15.3,
  },
  {
    brand: "Go MN",
    model: "UIK 270C",
    powerConsumptionWh: 20.3,
  },
  {
    brand: "VANY",
    model: "CEV 1100P",
    powerConsumptionWh: 22,
  },
  {
    brand: "VANY",
    model: "CEV 1300P",
    powerConsumptionWh: 23,
  },
  {
    brand: "VANY",
    model: "CEV 1500P",
    powerConsumptionWh: 24,
  },
  {
    brand: "VANY",
    model: "CEV 1700P",
    powerConsumptionWh: 25,
  },
  {
    brand: "VANY",
    model: "CEV 1900P",
    powerConsumptionWh: 26,
  },
];

battery.sort(function (a, b) {
  if (a.batteryName > b.batteryName) return 1;
  else return -1;
});

class Battery {
  constructor(batteryName, capacityAh, voltage, maxDraw, endVoltage) {
    this.batteryName = batteryName;
    this.capacityAh = capacityAh;
    this.voltage = voltage;
    this.maxDraw = maxDraw;
    this.endVoltage = endVoltage;
  }

  maxWatt() {
    return this.voltage * this.capacityAh;
  }

  endWatt() {
    return this.endVoltage * this.maxDraw;
  }

  maxUseHour(sumWatt) {
    return (this.maxWatt() / sumWatt).toFixed(1);
  }

  // Create battery options

  createBatteryElement(sumWatt) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    const nameP = document.createElement("p");
    const hoursP = document.createElement("p");
    nameP.innerHTML = `${this.batteryName}`;
    hoursP.innerHTML = `Estimate ${this.maxUseHour(sumWatt)} hours`;
    listItem.append(nameP);
    listItem.append(hoursP);
    const batteryList = document.querySelector(".battery-list");
    batteryList.append(listItem);
    return listItem;
  }
}

//making objects of battery

const batteryObjects = [];
battery.forEach((batt) => {
  batteryObjects.push(
    new Battery(
      batt["batteryName"],
      batt["capacityAh"],
      batt["voltage"],
      batt["maxDraw"],
      batt["endVoltage"]
    )
  );
});

console.log(batteryObjects);

class Camera {
  constructor(brand, model, powerConsumptionWh) {
    this.brand = brand;
    this.model = model;
    this.powerConsumptionWh = powerConsumptionWh;
  }

  //
  createModelElement(brand, index) {
    const option = document.createElement("option");
    option.value = index;
    option.innerHTML = this.model;
    return this.brand === brand ? option : null;
  }
}

//sorting camera in order of alphabet
const cameraSort = camera.sort(function (a, b) {
  if (a.model > b.model) {
    return 1;
  } else {
    return -1;
  }
});

// making the objects of camera
let cameraObjects = [];
camera.forEach((obj) =>
  cameraObjects.push(
    new Camera(obj["brand"], obj["model"], obj["powerConsumptionWh"])
  )
);

// making the list of brands
let brandsDic = {};
camera.forEach((dict) => {
  brandsDic[dict["brand"]] = 1;
});

// Sort in order of alphabet
const brands = Object.keys(brandsDic).sort();

// create brand options
const brandOptions = document.querySelector(".brand-options");
brands.forEach((brand) => {
  const option = document.createElement("option");
  option.value = brand;
  option.innerHTML = brand;
  brandOptions.append(option);
});

const modelOptions = document.querySelector(".model-options");
cameraObjects.forEach((obj, index) => {
  modelOptions.append(obj.createModelElement(brands[0], index));
});

brandOptions.addEventListener("change", (e) => {
  modelOptions.innerHTML = "";
  cameraObjects.forEach((obj, index) => {
    modelOptions.append(obj.createModelElement(e.target.value, index));
  });
  updateBattList();
});

modelOptions.addEventListener("change", updateBattList);

const inputWatt = document.getElementById("wattage");
inputWatt.addEventListener("change", updateBattList);

const batteryTopDiv = document.querySelector(".battery-list");
batteryObjects.forEach((battObj) => {
  batteryTopDiv.append(
    battObj.createBatteryElement(
      parseInt(inputWatt.value) +
        cameraObjects[modelOptions.value].powerConsumptionWh
    )
  );
});

function updateBattList() {
  const sumWatt =
    parseInt(inputWatt.value) +
    cameraObjects[modelOptions.value].powerConsumptionWh;
  batteryTopDiv.innerHTML = "";
  batteryObjects.forEach((batt) => {
    if (batt.endWatt() > sumWatt) {
      batteryTopDiv.append(batt.createBatteryElement(sumWatt));
    }
  });
}

console.log(brands);
console.log(brandsDic);
console.log(cameraObjects);
