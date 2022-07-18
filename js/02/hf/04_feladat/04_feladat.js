function TTI() {
    let suly = Number(document.getElementById("suly").value);
    let magassag = Number(document.getElementById("magassag").value);
    let sorok = tablazat.getElementsByTagName("tr");
    let ttiSzam = document.getElementById("ttiSzam");
    let ttiSzoveg = document.getElementById("ttiSzoveg");

    if (suly > 0 && magassag > 0) {
        let tti = suly / Math.pow(magassag / 100, 2);

        //megjeleníti a szüvegpanelt és a táblázatot
        eredmeny.removeAttribute("hidden");
        tablazat.removeAttribute("hidden");

        //leszedi az összes színmódosító bootstrap classt a szövegpanelről
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.remove("bg-dark");


        //leszedi az összes színmódosító bootstrap classt a táblázat sorairól
        for (let i = 1; i < sorok.length; i++) {
            const element = sorok[i];
            element.classList.remove("bg-danger")
            element.classList.remove("bg-warning")
            element.classList.remove("bg-success")
            element.classList.remove("text-light")
            element.classList.remove("text-dark")
        }

        //kiírja az aktuális tti-et
        ttiSzam.innerHTML = tti.toLocaleString('hu-HU');

        //megvizsgálja az adott tti-t és ez alapján eldönti, hogy melyik táblázat sort emelje ki, illetve szövegesen kiírja a megfelelő tti kategóriát
        if (tti < 16) {
            ttiSzoveg.innerText = "SÚLYOSAN SOVÁNY";
            inverseHighlightRed(eredmeny)
            highlightRed(sorok[1])
        } else if (tti < 17) {
            ttiSzoveg.innerText = "MÉRSÉKELTEN SOVÁNY";
            inverseHighlightRed(eredmeny)
            highlightRed(sorok[2])
        } else if (tti < 18.5) {
            ttiSzoveg.innerText = "ENYHÉN SOVÁNY";
            inverseHighlightYellow(eredmeny)
            highlightYellow(sorok[3])
        } else if (tti < 25) {
            ttiSzoveg.innerText = "NORMÁLIS TESTSÚLYÚ";
            inverseHighlightGreen(eredmeny)
            highlightGreen(sorok[4])
        } else if (tti < 30) {
            ttiSzoveg.innerText = "TÚLSÚLYOS";
            inverseHighlightYellow(eredmeny)
            highlightYellow(sorok[5])
        } else if (tti < 35.5) {
            ttiSzoveg.innerText = "I. FOKÚ ELHÍZOTT";
            inverseHighlightRed(eredmeny)
            highlightRed(sorok[6]);
        } else if (tti < 40) {
            ttiSzoveg.innerText = "II. FOKÚ ELHÍZOTT";
            inverseHighlightRed(eredmeny)
            highlightRed(sorok[7]);
        } else if (tti > 40) {
            ttiSzoveg.innerText = "III. FOKÚ (SÚLYOSAN) ELHÍZOTT";
            inverseHighlightRed(eredmeny)
            highlightRed(sorok[6]);
        }
    }

    function highlightRed(item) {
        item.classList.add("text-light")
        item.classList.add("bg-danger")
    }
    function highlightYellow(item) {
        item.classList.add("text-dark")
        item.classList.add("bg-warning")
    }

    function highlightGreen(item) {
        item.classList.add("text-light")
        item.classList.add("bg-success")
    }

    function inverseHighlightRed(item) {
        item.classList.add("text-danger")
        item.classList.add("bg-dark")
    }
    function inverseHighlightYellow(item) {
        item.classList.add("text-warning")
        item.classList.add("bg-dark")
    }

    function inverseHighlightGreen(item) {
        item.classList.add("text-success")
        item.classList.add("bg-dark")
    }
}

