const sepetWrite = document.querySelector("#sepet-write");
const sepetAddButtons = document.querySelectorAll("#sepete-ekle");
const sepetNumber = document.querySelector("#sepet-number");
const sepetLink = document.querySelector("#sepet-link");
const SepetWarning = document.querySelector("#sepet-boş-warning");
const header = document.querySelector("#header");
const adetSayısı = document.querySelector("#Adet-Sayısı");

// Sayfa yüklendiğinde sepet sayısını localStorage'dan alır burası

// SEPET BÖLÜMÜ
///////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const storedNumber = localStorage.getItem("number");
    if (storedNumber) {
        sepetNumber.innerHTML = storedNumber;
        sepetNumber.style.display = 'inline';
    }
});

sepetAddButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Linkin varsayılan davranışını engeller yani linkin varsayılan özelliği sayfa yenilemesidir her tıkladığımda yeniler.

        const card = event.target.closest(".card");
        const img = card.querySelector("#çanta-img").src;
        const head = card.querySelector("#ürün-basliklari").innerText;
        const explain = card.querySelector("#ürün-aciklamaları").innerText;
        const price = card.querySelector("#product-price").innerText;
        const adet = card.querySelector('#Adet-Sayısı').innerHTML++;

        // Sepete Ekleme İşlemleri

        let number = parseInt(sepetNumber.innerHTML) + 1;
        sepetNumber.innerHTML = number;
        sepetNumber.style.display = 'inline';

        localStorage.setItem("number", number);

        // Ürün Bilgilerini LocalStorage'e Kaydet

        let sepetItems = JSON.parse(localStorage.getItem("sepetItems")) || [];
        sepetItems.push({ img, head, explain, price, adet});
        localStorage.setItem("sepetItems", JSON.stringify(sepetItems));

        console.log("Ürün eklendi:", head, price, explain, img, adet);

    });
});

sepetLink.addEventListener("click", function() {
    sepetNumber.innerHTML = localStorage.getItem("number");
    sepetNumber.style.display = 'inline';
});




