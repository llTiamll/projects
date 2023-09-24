alert(
  "توجه این وبسایت در دست توسعه متوقف شده است فقط برای گوشی طراحی شده(ریپانسیو فقط برای گوشی)"
);

let imgDiscount = document.querySelectorAll(".img-Discount");
const addToBag = document.querySelectorAll(".add-user-to-shop-css");

let card = document.querySelectorAll(".card-of-courses");
card.forEach((element1) => {
  element1.addEventListener("mousemove", mouseM);
  element1.addEventListener("mouseout", mouseO);
  function mouseM() {
    const iD = element1.id;
    imgDiscount[iD].className = "gg";
  }
  mouseM();
  function mouseO() {
    const iD = element1.id;
    imgDiscount[iD].className = "gg1";
  }
  mouseO();
});

let elemntBefore = document.querySelectorAll(".before-elemnt");
elemntBefore.forEach((item) => {
  item.addEventListener("mousemove", moveEl);
});
elemntBefore.forEach((item) => {
  item.addEventListener("mouseout", moveElO);
});
function moveEl(event) {
  event.target.className = "eeee3";
}

function moveElO(event) {
  event.target.className = "eeee1";
}

let badgShop = document.getElementById("badge-shoping");

addToBag.forEach((item) => {
  item.addEventListener("click", addToBagFun);
});
function addToBagFun(event) {
  if (event.target.id == "python") {
    let cc = parseInt(badgShop.innerText);
    cc = cc + 1;
    badgShop.innerText = cc;

    if (event.target.id == "python") {
      console.log(python);
    }
  }
}

const python = { money: "700", name: "دوره جامع پایتون", Discount: "1400" };

const btnComments = document.getElementById("btnComments");
btnComments.addEventListener("click", handelAndSent);
const bodyy = document.querySelector("body");
function handelAndSent() {
  const Commentforappendtothesite = document.getElementById(
    "Commentforappendtothesite"
  );
  const usernameComments = document.getElementById("usernameComments");
  const newElmanForComments = document.createElement("div");
  const titelNewElmanForComments = document.createElement("div");
  const textNewElmanForComments = document.createElement("div");
  const InfoUser = document.createElement("div");
  const imgForInfoUser = document.createElement("img");
  const usernameInfo = document.createElement("h6");

  usernameInfo.innerText = `-${usernameComments.value}`;
  usernameInfo.className = "h6-username";
  textNewElmanForComments.innerText = Commentforappendtothesite.value;
  imgForInfoUser.src = "./img/icons8-add-user-male-50.png";

  // appendChildsss
  newElmanForComments.appendChild(titelNewElmanForComments);
  newElmanForComments.appendChild(textNewElmanForComments);
  titelNewElmanForComments.appendChild(InfoUser);
  InfoUser.appendChild(imgForInfoUser);
  InfoUser.appendChild(usernameInfo);

  // classNameForAllElemnts
  newElmanForComments.className = "UserComments";
  titelNewElmanForComments.className = "UserCommentsDiv";
  InfoUser.className = "InfoUser";
  imgForInfoUser.className = "imgForInfoUser";
  textNewElmanForComments.className = "textUser";
  bodyy.appendChild(newElmanForComments);
  newElmanForComments.style.marginTop = "1rem";
}

// start after before omid
// ----------------------------------------------------------

const Num1 = document.getElementById("icon-number1");
const Num2 = document.getElementById("icon-number2");
const Num3 = document.getElementById("icon-number3");
let i = (j = 1);
let k = 1;

async function AwaitFun() {
  const timeNumber = setInterval(() => {
    i = i + 1;
    if (i == 1000) {
      clearInterval(timeNumber);
    }

    Num1.innerHTML = i;
  }, 10);

  const timeNumber2 = setInterval(() => {
    j = j + 1;
    if (j == 1000) {
      clearInterval(timeNumber2);
    }

    Num2.innerHTML = j;
  }, 10);

  const timeNumber3 = setInterval(() => {
    k = k + 1;
    if (k == 10) {
      clearInterval(timeNumber3);
    }

    Num3.innerHTML = k;
  }, 800);
}
AwaitFun();
