const Minus = document.querySelector("#minus");
const BtnText = document.querySelector("#btnText");
const Plus = document.querySelector("#plus");
let intervalId;
let timerstarted = false;

document.querySelector("#plus").addEventListener("click", function () {});


document.querySelector("#btnStart").addEventListener("click", function () {

      localStorage.setItem("zero", zero);
      localStorage.setItem("second", second);

      if (BtnText.value == "" ||  (zero == 0 && second == 0)) {
        alert("Lütfen çalışacağınız dersi giriniz eğer süre girmediyseniz lütfen süre belirtiniz.");

      } else if(!(zero == 0 && second == 0) && !timerstarted){
        TimerStart();
        document.querySelector("#btnStop").style.display = "inline-block";
        timerstarted = true;
      } else if(intervalId) {
        timerstarted = false;
      }
      else {
        document.querySelector("#warning-text").style.display = "none";
        document.querySelector("#plus").style.display = "none";
        document.querySelector("#minus").style.display = "none";
        startTime();
      }

      
});

document.querySelector("#btnReplay").addEventListener("click", () => {

  if(!(zero == 0 && second == 0)) {
    let html = `
        <span>${localStorage.getItem("zero") < 10 ? "0" + zero : localStorage.getItem("zero")}</span>:<span>${localStorage.getItem("second") < 10 ? "0" + second : localStorage.getItem("second")}</span>
    `;
    document.querySelector("#sayaç").innerHTML = html;
    console.log(html)
    TimerStart();
  }


});

document.querySelector("#buraya-ekle").addEventListener("click", () => {
  if(!(zero == 0 && second == 0) && !timerstarted){
    TimerStart();
    timerstarted = true;
  }
});

document.querySelector("#btnStop").addEventListener("click", function () { 
  
  clearInterval(intervalId);
  console.log("Zamanlıyıcı Durduruldu");

  let html = `
        <button type="button" class="btn btn-success mt-2" id="button-finish">Bitir</button>
    `;

  localStorage.setItem("zero2" , zero);
  localStorage.setItem("second2" , second);
  
  document.querySelector("#buraya-ekle").innerHTML = html;
});

document.querySelector("#buraya-ekle").addEventListener("click", () => {
  if(!(zero == 0 && second == 0)) {
    document.querySelector("#buraya-ekle").innerHTML = "";
    addLesson();
    addTime();
    document.querySelector("#plus").style.display = "inline-block";
    document.querySelector("#minus").style.display = "inline-block";
  }
 

});

function zeroTime() {
    if(zero == 0 && second == 0) {
      addTime();
      addLesson();
    }
    console.log(zeroTime);
}

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

var zero = 0;
var second = 0;

function startTime() {
  let html = `
        <span>${zero < 10 ? "0" + zero : zero}</span>:<span>${second < 10 ? "0" + second : second}</span>
    `;
  document.querySelector("#sayaç").innerHTML = html;
}

function TimerStart() {

    intervalId = setInterval(function() {
        second--

        if(second == -1) {
          zero--
          second = 59;
        } else if(zero == 0 && second == 0) {
            clearInterval(intervalId);
            console.log("Interval Durduruldu")
            addLesson();
            addTime();
        }

        startTime();
    }, 10);
}



function addLesson() {
    let html = `
        ${BtnText.value}
    `
    document.querySelector("#lesson-name").insertAdjacentHTML("afterbegin", html);
}

function addTime() {
  let htmlls = `
      ${localStorage.getItem("zero") < 10 ? "0" + localStorage.getItem("zero") : localStorage.getItem("zero")}:${localStorage.getItem("second") < 10 ? "0" + localStorage.getItem("second") : localStorage.getItem("second")}
  `
  document.querySelector("#time").insertAdjacentHTML("afterbegin", htmlls);
}
