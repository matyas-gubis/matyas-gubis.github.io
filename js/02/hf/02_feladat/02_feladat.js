function zoldsegArak(){    
    let almaDb = Number(document.getElementById("alma").value);
    let szilvaDb = Number(document.getElementById("szilva").value);
    let szoloDb = Number(document.getElementById("szolo").value);    

    const almaAr = 240;
    const szilvaAr = 310;
    const szoloAr = 650;  
    
    let huf = Intl.NumberFormat("hu-HU",{style: "currency", currency: "HUF",})
    
    document.getElementById("szamla").innerHTML = "<h2>Számla</h2><table><tr><th>termék</th><th>egységár</th><th>vásárolt mennyiség</th><th>végösszeg</th></tr><tr><td>Alma</td><td>"+huf.format(almaAr)+"</td><td>"+almaDb+" kg</td><td>"+huf.format(almaAr*almaDb)+"</td></tr><tr><td>Szilva</td><td>"+huf.format(szilvaAr)+"</td><td>"+szilvaDb+" kg</td><td>"+huf.format(szilvaAr*szilvaDb)+"</td></tr><tr><td>Szőlő</td><td>"+huf.format(szoloAr)+"</td><td>"+szoloDb+" kg</td><td>"+huf.format(szoloAr*szoloDb)+"</td></tr><tr><td><strong>Végösszeg</strong></td><td></td><td></td><td><strong>"+(huf.format((szoloAr*szoloDb)+(szilvaAr*szilvaDb)+(almaAr*almaDb)))+"</strog></td></tr></table>"     
    
    let tablazatok = document.getElementsByTagName("table");
    for (let i = 0; i < tablazatok.length; i++) {
        tablazatok[i].classList.add("table");
        tablazatok[i].classList.add("table-light");
        tablazatok[i].classList.add("mt-3");
        tablazatok[i].classList.add("text-capitalize");
    }
}

