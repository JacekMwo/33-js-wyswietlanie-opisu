//stwórz zmienną o dowolnej nazwie i przypisz do niej paragraf przy użyciu document.getElementById("nazwa-id");
const paragraf = document.getElementById("opis");
//Następnie stwórz kolejną zmienną i przypisz do niej button (przy użyciu document.querySelector)
const guzik = document.querySelector("button");
//Do buttona dodaj zdarzenie onclick, po którym zostanie wywołana funkcja.
guzik.onclick = function() {
    // Dodanie tekstu do paragrafu
    paragraf.innerText = ' Nowy iPhone 13 został wyposażony w 6,1-calowy wyświetlacz OLED. Biorąc pod uwagę sam ekran smartfona iPhone 13, wymiary matrycy w porównaniu z modelem Pro są identyczne. Różnica tkwi jedynie w częstotliwości odświeżania ekranu.' 
}



