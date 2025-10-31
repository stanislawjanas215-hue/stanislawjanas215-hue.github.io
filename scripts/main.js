const imgs = document.querySelectorAll("img");
const firstImg = imgs[0];
const secondImg = imgs[1];
const thirdImg = imgs[2];
firstImg.addEventListener("click", () => {
  const mySrc = firstImg.getAttribute("src");
  if (mySrc === "images/emilia.jpg") {
    firstImg.setAttribute("src", "images/emilia2.jpg");
  } else {
    firstImg.setAttribute("src", "images/emilia.jpg");
  }
});
secondImg.addEventListener("click", () => {
  const mySrc = secondImg.getAttribute("src");
  if (mySrc === "images/rem.jpg") {
    secondImg.setAttribute("src", "images/rem2.jpg");
  } else {
    secondImg.setAttribute("src", "images/rem.jpg");
  }
});
thirdImg.addEventListener("click", () => {
  const mySrc = thirdImg.getAttribute("src");
  if (mySrc === "images/echidna.jpg") {
    thirdImg.setAttribute("src", "images/echidna3.jpg");
  } else {
    thirdImg.setAttribute("src", "images/echidna.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
const MAX_NAME_LENGTH = 20;
function setUserName() {
  const myName = prompt("What is your name?");
  if (!myName) {
    setUserName();
  } else if (myName.length > MAX_NAME_LENGTH) {
    alert(
      "Name is too long. Please enter a name with less than 20 characters."
    );
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Anime girls by ${myName}`;
  }
  if (localStorage.getItem("name") === "Yuvin Marasini") {
    myHeading.textContent = `You are the youngest person ever`;
  }
}
if (localStorage.getItem("name") === "Yuvin Marasini") {
  myHeading.textContent = `You are the youngest person ever`;
} else if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Anime girls by ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
  if (localStorage.getItem("name") === "Yuvin Marasini") {
    myHeading.textContent = `You are the youngest person ever`;
  }
});


