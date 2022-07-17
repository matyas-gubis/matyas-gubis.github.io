function uzemanyagSzamitas(){    
    let fogyasztas = Number(document.getElementById("fogyasztas").value);
    let uzemanyagAr = Number(document.getElementById("uzemanyagAr").value);
    let utHossz = Number(document.getElementById("utHossz").value);

    let kmAr = fogyasztas*uzemanyagAr/100;
    
    document.getElementById("eredmeny").innerHTML = "Ezzel az autóval minden megtett km " + kmAr.toFixed(2) + " Ft-ba kerül, így a teljes út " +  (kmAr*utHossz).toFixed(2) + " Ft lesz.";    
}