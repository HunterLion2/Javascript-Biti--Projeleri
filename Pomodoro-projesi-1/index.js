const Minus = document.querySelector("#minus");
const BtnText = document.querySelector("#btnText");
const Plus = document.querySelector("#plus");

document.querySelector("#plus").addEventListener("click", function () {});

document.querySelector("#btnStart").addEventListener("click", function () {

      if (BtnText.value == "") {
        alert("Lütfen çalışacağınız dersi giriniz");

      } else {
            document.querySelector("#warning-text").style.display = "none";
            startTime();
  }
});

document.querySelector("#btnStop").addEventListener("click", function () {
  let html = `
        <button type="button" class="btn btn-success mt-2" id="button-finish">Bitir</button>
        <button type="button" class="btn btn-body-tertiary border mt-2" id="button-continue">Devam Et</button>
    `;
  document.querySelector("#buraya-ekle").innerHTML = html;
});


document.querySelector("#buraya-ekle").addEventListener("click", () => {
  document.querySelector("#buraya-ekle").innerHTML = "";
    addLesson();
    addTime();
});


Plus.addEventListener("click", function Plusfunction(){
  zero++;
  startTime();
});

Minus.addEventListener("click", function Minusfunction(){
    if (zero <= 0) {

    } else if (zero >= 0) {
        zero--;
        startTime();
    }
});

var zero = "0";
var second = "00";

function startTime() {
  let html = `
        <span>${zero}</span>:<span>${second}</span>
    `;
  document.querySelector("#sayaç").innerHTML = html;

}


function addLesson() {

    let html = `
        ${BtnText.value}
    `
    document.querySelector("#lesson-name").insertAdjacentHTML("afterbegin", html);

}



function addTime() {

  let html = `
      ${zero}:${second}
  `
  document.querySelector("#time").insertAdjacentHTML("afterbegin", html);

}
