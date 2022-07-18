function euroValtas(){    
    let arfolyam = Number(document.getElementById("arfolyam").value);
    let euroMennyiseg = Number(document.getElementById("euroMennyiseg").value); 

    let eur = Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",});
    let huf = Intl.NumberFormat("hu-HU",{style: "currency", currency: "HUF",});
    
    document.getElementById("eredmeny").innerHTML = eur.format(euroMennyiseg)+" <strong>"+huf.format(arfolyam*euroMennyiseg)+"</strong>-ot ér.";
}

