let dogsimage = document.getElementById("dogs");
let btn1 = document.getElementById("btn1");
let catsimage = document.getElementById("cats");
let btn2 = document.getElementById("btn2");

let quotess = document.getElementById("quotes");
let author = document.getElementById("author");
let btn3 = document.getElementById("btn3");

function catsfunction() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((Response) => Response.json())
    .then((datacats) => {
      catsimage.innerHTML = `<image src="${datacats[0].url}"height=300px width= 400px/>`;
    });
}
function generate() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((datadogs) => {
      dogsimage.innerHTML = `<image src="${datadogs.message}"  height=300px width= 400px />`;
    });
}

function quotesgenerate() {
  fetch("https://api.quotable.io/random")
    .then((Response) => Response.json())
    .then((quoted) => {
      quotess.innerHTML = quoted.content;
      quotess.setAttribute("style", "width: 250px;");
      author.innerHTML = quoted.author;
      author.setAttribute(
        "style",
        "width: 250px;",
        "align-self: center;",
        "position: absolute;"
      );
    });
}
let button3 = document.getElementById("grade3");
let randomHW = ["10%", "20%", "30%", "50%", "40%", "60%", "70%"];
// , "80%", "90%", "20%", "30%", "50%", "40%"
let button3per = "95%";

button3.addEventListener("mouseover", failed);
button3.addEventListener("click", failed);

function failed() {
  let randomindex = parseInt(Math.random() * randomHW.length);
  button3.setAttribute("style", "position: absolute;");
  button3.style.left = randomHW[randomindex];
}
const button1 = document.getElementById("grade1");
let infom = document.getElementById("student");

button1.addEventListener("click", one);

function one() {
  infom.innerHTML =
    "IQUEN MARBA BSIT-2D " +
    "THANKYOU SIR" +
    `<a id="pic" href="https://www.facebook.com/iquen.marba.7/"><img id="profile" src="codesnapPic/pp.jpg" height="40px"width="40px" /></a>`;
  button3.style.left = randomHW[parseInt(button3per)];
}
const button2 = document.getElementById("grade2");
button2.addEventListener("click", two);

function two() {
  infom.innerHTML =
    "IQUEN MARBA BSIT-2D " +
    "THANKYOU SIR gihapon sir" +
    `<a id="pic" href="https://www.facebook.com/iquen.marba.7/"><img id="profile" src="codesnapPic/pp.jpg" height="40px"width="40px" /></a>`;
}
