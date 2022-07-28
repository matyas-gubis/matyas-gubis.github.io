let osszMeret = document.getElementById("szobakOsszmerete");
let festesTipusa = document.getElementById("festesTipusa");
let hianyzoAdat = false;
let eredmenyHelye = document.getElementById("eredmenyHelye");
let eredmeny = document.getElementById("eredmeny");
let arak = [3500, 4000, 4500];

let ujUgyfel = document.getElementsByName("ujUgyfel");
let szorzo1 = 1;
let szorzo2 = 1;

let surgos = document.getElementById("surgos");

function szamolas() {
    eredmeny.classList.remove("text-success");
    eredmeny.classList.remove("text-danger");

    ujUgyfel[0].checked ? szorzo1 = 1 : szorzo1 = 0.9;
    surgos.checked ? szorzo2 = 1.2 : szorzo2 = 1;

    if (osszMeret.value.length < 1) {
        hianyzoAdat = true;
        addInvalid(osszMeret);
    } else {
        clearInvalid(osszMeret);
    }

    if (festesTipusa.value < 0) {
        hianyzoAdat = true;
        addInvalid(festesTipusa);
    } else {
        clearInvalid(festesTipusa);
    }

    if (osszMeret.value.length >= 1 && festesTipusa.value >= 0) {
        hianyzoAdat = false
    }

    if (hianyzoAdat) {
        eredmeny.classList.add("text-danger");
        eredmeny.innerHTML = "Hiányzó adat";

    } else {
        eredmeny.classList.add("text-success");
        eredmenyHelye.removeAttribute("hidden");

        eredmeny.innerHTML = Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(arak[festesTipusa.value] * Number(osszMeret.value) * szorzo1 * szorzo2);
    }

    if (eredmenyHelye.attributes.length > 1) {
        document.getElementById("eredmenyHelye").attributes.removeNamedItem("hidden");
    }
}

function clearInvalidAll() {
    adatok.forEach(element => {
        clearInvalid(element);
    });
}

function clearInvalid(element) {
    element.classList.remove("is-invalid");
}

function addInvalid(element) {
    element.classList.add("is-invalid");
}