let vezeteknev = document.getElementById("vezeteknev");
let keresztnev = document.getElementById("keresztnev");
let beosztas = document.getElementById("beosztas");
let fizetesJelenlegi = document.getElementById("fizetesJelenlegi");

let adatok = [vezeteknev, keresztnev, fizetesJelenlegi];
let hianyzoAdat = false;
let firstrun = true;

let fizetesSzorzok = [1.05, 1.05, 1.15, 1.1];

function szamitas() {
    hianyzoAdat = false;

    for (let i = 0; i < adatok.length; i++) {
        if (adatok[i].value.length == 0) {
            addInvalid(adatok[i]);
            hianyzoAdat = true;
        } else {
            clearInvalid(adatok[i]);            
        }
    }

    if (hianyzoAdat) {
        alert("Hiányzó adat!");
    } else {
        if(firstrun){
            document.getElementById('eredmeny').attributes.removeNamedItem("hidden");
        }
        clearInvalidAll();
        document.getElementById('kalkulaltEredmeny').innerHTML = Intl.NumberFormat('hu-HU', {style: "currency", currency: "HUF"}).format( kalkulalas());        
        firstrun = false;
    }

    function kalkulalas() {
        return fizetesJelenlegi.value * fizetesSzorzok[beosztas.value];
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
}