const img = document.querySelector("img");
const upgrade = document.getElementById("coutUpgrade");
const upgradebtn = document.getElementById("upGrade");
const nombreclick = document.getElementById("nbClick");
const curentMoney = document.getElementById("currentMoney");
const mpc = document.getElementById("moneyPerClick");

var nbClick = 0;
var money = 0;
var moneyPerClick = 10;
var coutUpgrade = 500;

img.addEventListener("mousedown", () => {
  img.style.transform = "rotate(2deg)";
  nbClick++;
  money += moneyPerClick;
  console.log(nbClick);
  console.log(money);
  upgrade.textContent = coutUpgrade;
  nombreclick.textContent = nbClick;
  curentMoney.textContent = money;
  mpc.textContent = moneyPerClick;
  ring();
});

img.addEventListener("mouseup", () => {
  img.style.transform = "rotate(2deg) rotate(-2deg)";
});

upgradebtn.addEventListener("click", () => {
  console.log("test");
  if (money < coutUpgrade) {
    alert("T'es trop pauvre !");
  } else {
    moneyPerClick += 10;
    money -= coutUpgrade;
    coutUpgrade += (coutUpgrade *1.2);
    upgrade.textContent = coutUpgrade;
    nombreclick.textContent = nbClick;
    curentMoney.textContent = money;
    mpc.textContent = moneyPerClick;
  }
});

const ring = () => {
  const audio = new Audio();
  audio.src = "gnomed.mp3";
  audio.play();
};
