const SepetBölümü = document.querySelector("#sepet-bölümü");
const SepetToplambölümü = document.querySelector("#sepetToplamBölümü");
const ödemeBaşlık = document.querySelector("#ödeme-information-head");
const ödemeFiyat = document.querySelector("#ödeme-informaiton-price");
const ödemeAdet = document.querySelector("#ödeme-information-number");
const Toplam = document.querySelector("#sepetToplamBölümü");
const toplamFiyat = document.querySelector("#toplamFiyat");

document.addEventListener("DOMContentLoaded", () => {
    const sepetItems = JSON.parse(localStorage.getItem("sepetItems")) || [];

    if (localStorage.getItem("number") === null  ) {
        SepetWarning.style.display = 'inline';
        Toplam.style.display = 'none';
    } else if(localStorage.getItem("number") === 0) {
        SepetWarning.style.display = 'inline';
        Toplam.style.display = 'none';
    }
    else {
        SepetWarning.style.display = 'none';
        
        let ToplamFiyat = 0;

        sepetItems.forEach(item => {
            const Sepet = `
                    <div class="col-lg-12 mt-4 sepet-ürünler-bölümü">
                        <div class=" card p-2" id="sepet-part">
                            <div class="row sepet-bölümü-in">
                                <div class="col-lg-3 px-5">
                                    <img src="${item.img}" alt="" id="sepet-img-information">
                                </div>
                                <div class="col-lg-3 px-3 mt-3">
                                    <h2 id="sepet-head-information">${item.head}</h2>
                                    <p id="sepet-paragraph-information">${item.explain}</p>

                                </div>
                                <div class="col-2">
                                    <input type="number" name="" value="${item.adet}" id="" class="form-control input-value-information">
                                </div>
                                <div class="col-2 px-2">
                                    <p id="price-sepet">${item.price}</p>
                                </div>
                                <div class = "col-2 px-1">
                                    <a href="" id="ürün-silme"><i class="fa-solid fa-xmark"></i></a> 
                                </div>
                            </div>
                        </div>
                    </div>
            `;
            SepetBölümü.insertAdjacentHTML("afterbegin",Sepet);

            document.querySelector("#ürün-silme").addEventListener("click", function(event) { // Eğer bunu DOMContentLoaded'ın içine yazmazsak sayfa tam yüklenmeden bulmaya çalıştırıcağı için id'yi bulamaz.
                const cardSilme = event.target.closest(".sepet-ürünler-bölümü") 
                const ürünBaşlık = cardSilme.querySelector("#sepet-head-information").innerText;

                // LocalStorage'den kaldırma kısmı

                const updatedSepetItems = sepetItems.filter(sepetItem => sepetItem.head !== ürünBaşlık)
                localStorage.setItem("sepetItems", JSON.stringify(updatedSepetItems));

                cardSilme.remove();

                // Sepet Sayısını güncelleme

                let number = parseInt(localStorage.getItem("number")) - 1;
                    localStorage.setItem("number", number);
                    sepetNumber.innerHTML = number;
                    if (number === 0) {
                        sepetNumber.style.display = 'none';
                    }

            }); 
            

            const ToplamBölümüÜrün = `
                <span style = "width: auto;"><br> ${item.head} </br></span> 
            `; 
            ödemeBaşlık.insertAdjacentHTML("afterbegin", ToplamBölümüÜrün);   

            const ToplamBölümAdet = `
              <span><br> ${item.adet} </br></span> 
            `;
            ödemeAdet.insertAdjacentHTML("afterbegin", ToplamBölümAdet) ;

            const ToplamBölümFiyat = `
              <br> ${item.price * item.adet} </br>
            `;
            ödemeFiyat.insertAdjacentHTML("afterbegin", ToplamBölümFiyat) ;

            ToplamFiyat += item.price * item.adet

        const FiyatHTML = `
            ${ToplamFiyat} TL
        `;
        toplamFiyat.innerHTML =  FiyatHTML
        });

        

    }
});

