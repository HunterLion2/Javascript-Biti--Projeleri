const sepetWrite = document.querySelector("#sepet-write");
const sepetAddButtons = document.querySelectorAll("#sepete-ekle");
const sepetNumber = document.querySelector("#sepet-number");

sepetAddButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Linkin varsayılan davranışını engeller yani linkin varsayılan özelliği sayfa yenilemesidir her tıkladığım da yeniler.
        sepetNumber.innerHTML = parseInt(sepetNumber.innerHTML) + 1;
        sepetNumber.style.display = 'inline';
    });
});


