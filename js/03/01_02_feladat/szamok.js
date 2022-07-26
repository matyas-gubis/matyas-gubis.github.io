//2.a
let szamok = [];

let i = 0;
while(i < 10){
    szamok[i] = Number(prompt(i+1 + ". szám  (1-20): "));
    if(szamok[i] >= 1 && szamok[i] <= 20){
        i++;
    }else{
        alert("Sajnos ez a szám nem felel meg a kritériumnak.")
    }    
}
alert("Az Ön által megadott számok:"+csinaljSzovegetASzamokbol(szamok));

//2.b
szamok.sort(function(a, b){return a-b})
alert("A számok növekvő sorrendben: " +csinaljSzovegetASzamokbol(szamok));

//2.c
szamok.sort(function(a, b){return b-a})
alert("A számok csökkenő sorrendben: " +csinaljSzovegetASzamokbol(szamok));

//2.d
szamok.sort(function(a, b){return 0.5 - Math.random()})
alert("A számok véletlenszű sorrendben: " +csinaljSzovegetASzamokbol(szamok));

//2.e
min = szamok[0];
for (let j = 1; j < szamok.length; j++) {
    const element = szamok[j];
    if (element < min) {
        min = element;
    }
} 


alert("A legkisebb szám:" + min + "A legnagyobb szám: " + Math.max.apply(null, szamok));

//2.f
szamokNegyzete = szamok.map(negyzetreemeles);

function negyzetreemeles(szam){
    return Math.pow(szam, 2);
}
alert("A számok négyzetei: " + csinaljSzovegetASzamokbol(szamokNegyzete));

//2.g
i = 0;
while(i < szamok.length && szamok[i] <= 10){
    i++;
}
if(i < szamok.length){
    alert("Az első 10-nél nagyobb szám a " + szamok[i] + " ami a(z) " + i + ". indexen található");
}else{
    alert("Nincs olyan szám, ami nagyobb 10-nél")
}


//2.h
i = 0;
while(i < szamok.length && szamok[i] > 3){
    i++;
}
if(i < szamok.length){
    alert("Van 3-nál kisebb szám");
}else{
    alert("Nincs 3-nál kisebb szám");
}
i=0;


function csinaljSzovegetASzamokbol(array){
    let szoveg = "";
    for (let j = 0; j < array.length; j++) {
        if(j < array.length -1){
            szoveg += array[j] + ", ";
        }else{
            szoveg += array[j];
        }
    }    
    return szoveg;
}
