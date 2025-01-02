const SepetBölümü = document.querySelector("#sepet-bölümü");
const SepetToplambölümü = document.querySelector("#sepetToplamBölümü");
const ödemeBaşlık = document.querySelector("#ödeme-information-head");
const ödemeFiyat = document.querySelector("#ödeme-informaiton-price");
const ödemeAdet = document.querySelector("#ödeme-information-number");
const Toplam = document.querySelector("#sepetToplamBölümü");

document.addEventListener("DOMContentLoaded", () => {
    const sepetItems = JSON.parse(localStorage.getItem("sepetItems")) || [];

    console.log(JSON.parse(localStorage.getItem("sepetItems")));

    if (localStorage.getItem("number") === null) {
        SepetWarning.style.display = 'inline';
        Toplam.style.display = 'none';
    } else {
        SepetWarning.style.display = 'none';
        
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
                                    <a href="" class="ürün-silme"><i class="fa-solid fa-xmark"></i></a> 
                                </div>
                            </div>
                        </div>
                    </div>
            `;

            

            SepetBölümü.insertAdjacentHTML("afterbegin",Sepet);

            // if(item.adet < this.item.adet) {
            //     SepetBölümü.innerHTML = '';
            // }

            const ToplamBölümüÜrün = `
                ${item.head}
            `; 
            ödemeBaşlık.innerHTML = ToplamBölümüÜrün;   

            const ToplamBölümAdet = `
                ${item.adet}
            `;
            ödemeAdet.innerHTML = ToplamBölümAdet;

            const ToplamBölümFiyat = `
                ${item.price * item.adet}
            `;
            ödemeFiyat.innerHTML = ToplamBölümFiyat;

        })
console.log(localStorage.getItem("adet"))
    }


});