// Variabilele care țin totalul veniturilor și cheltuielilor
let totaleInntekter = 0;
let totaleUtgifter = 0;

// Luăm elementele din HTML după id-ul lor
let type = document.getElementById("type");
let kategori = document.getElementById("kategori");
let belop = document.getElementById("belop");

// Luăm listele și rezultatul din HTML
let inntekter = document.getElementById("inntekter");
let utgifter = document.getElementById("utgifter");
let saldo = document.getElementById("saldo");

// Luăm butonul "Legg til"
let leggTil = document.getElementById("leggTil");


// Această funcție se execută când apăsăm pe buton
leggTil.onclick = function () {

    // Transformăm valoarea introdusă în număr
    let verdi = Number(belop.value);

    // Verificăm dacă utilizatorul a completat toate câmpurile
    // sau dacă suma este 0 ori mai mică
    if (kategori.value === "" || belop.value === "" || verdi <= 0) {
        alert("Skriv inn kategori og beløp");
        return;
    }

    // Creăm un element nou <li> pentru listă
    let nyPost = document.createElement("li");

    // Punem categoria și suma în elementul creat
    // Exemplu: Mat: 500 kr
    nyPost.textContent = kategori.value + ": " + verdi + " kr";


    // Verificăm dacă este o încasare sau o cheltuială
    if (type.value === "inntekt") {

        // Adăugăm venitul în lista de venituri
        inntekter.appendChild(nyPost);

        // Adăugăm suma la totalul veniturilor
        totaleInntekter = totaleInntekter + verdi;

    } else {

        // Adăugăm cheltuiala în lista de cheltuieli
        utgifter.appendChild(nyPost);

        // Adăugăm suma la totalul cheltuielilor
        totaleUtgifter = totaleUtgifter + verdi;
    }


    // Calculăm soldul:
    // venituri - cheltuieli
    let resultat = totaleInntekter - totaleUtgifter;

    // Afișăm rezultatul pe pagină
    saldo.textContent = resultat + " kr";


    // Dacă rezultatul este negativ, îl facem roșu
    if (resultat < 0) {
        saldo.style.color = "red";
    } else {

        // Dacă este pozitiv sau 0, îl facem verde
        saldo.style.color = "green";
    }


    // Golim câmpurile după ce am adăugat o sumă
    kategori.value = "";
    belop.value = "";
};