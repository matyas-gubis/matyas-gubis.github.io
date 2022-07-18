function uzemanyagSzamitas(){    
    let fogyasztas = Number(document.getElementById("fogyasztas").value);
    let uzemanyagAr = Number(document.getElementById("uzemanyagAr").value);
    let utHossz = Number(document.getElementById("utHossz").value);    

    let kmAr = fogyasztas*uzemanyagAr/100;
    
    document.getElementById("eredmeny").innerHTML = "Ezzel az autóval minden megtett km <strong>" + kmAr.toFixed(2) + " Ft</strong>-ba kerül, így a teljes út <strong>" +  (kmAr*utHossz).toFixed(2) + "&nbsp;Ft</strong> lesz.";    
}

