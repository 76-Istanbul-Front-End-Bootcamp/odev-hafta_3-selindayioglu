class Animal {
  constructor(ad, resim) {
    this.ad = ad;
    this.resim = resim;
  }

  action(e) {
    e.stopPropagation();
    document.getElementById(this.actionSoundName).play();
  }

  putImage() {
    const imageHolder = document.querySelector("#imageHolder");
    const resim = imageHolder.querySelector("img");
    let resimson = "";
    if (resim) {
      resim.setAttribute("src", this.resim);
    } else {
      resimson = document.createElement("img");
      resimson.setAttribute("src", this.resim);
      imageHolder.appendChild(resimson);
    }
  }

  putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");

    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.ad;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);

    petTR.onclick = this.putImage.bind(this);
  }
}

class Cat extends Animal {
  constructor(ad, imageUrl) {
    super(ad, imageUrl);
    this.legs = 4;
    this.actionText = "Meoow";
    this.actionSoundName = "meow";
  }
}

class Monkey extends Animal {
  constructor(ad, imageUrl) {
    super(ad, imageUrl);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
  }
}

var Mila = new Cat(
  "Mila",
  "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
);
Mila.putInTheDocument();

var Charlie = new Monkey(
  "Charlie",
  "https://i.pinimg.com/originals/2a/3e/15/2a3e152383712a5f4e5e1d42fa51ba2b.jpg"
);
Charlie.putInTheDocument();
