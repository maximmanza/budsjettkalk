let totaleInntekter = 0;
let totaleUtgifter = 0;

let type = document.getElementById("type");
let kategori = document.getElementById("kategori");
let belop = document.getElementById("belop");

let leggTil = document.getElementById("leggTil");

let inntekter = document.getElementById("inntekter");
let utgifter = document.getElementById("utgifter");
let saldo = document.getElementById("saldo");


leggTil.onclick = function () {

    let verdi = Number(belop.value);

    if (kategori.value === "" || belop.value === "" || verdi <= 0) {
        alert("Skriv inn kategori og beløp");
        return;
    }

    let nyPost = document.createElement("li");
    nyPost.textContent = kategori.value + ": " + verdi + " kr";

    if (type.value === "inntekt") {
        inntekter.appendChild(nyPost);
        totaleInntekter = totaleInntekter + verdi;
    } else {
        utgifter.appendChild(nyPost);
        totaleUtgifter = totaleUtgifter + verdi;
    }

    let resultat = totaleInntekter - totaleUtgifter;

    saldo.textContent = resultat + " kr";

    if (resultat < 0) {
        saldo.style.color = "red";
    } else {
        saldo.style.color = "green";
    }

    kategori.value = "";
    belop.value = "";
};