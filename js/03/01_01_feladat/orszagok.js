let europaiOrszagok = [];

let kiirandoSzoveg = "";


//1.a feladat
alert("Adjon meg 5 európai országnevet!")

//karakterellenorzes nelkuli megoldas
/* for (let i = 0; i < 5; i++) {
    europaiOrszagok[i] = prompt((i+1) + ". ország: ");    
    aFeladat += europaiOrszagok[i];
    if(i<4) aFeladat+=", ";    
} */

//megoldas karakterszam ellenorzesevel
let index = 0;
while(index<5){
    europaiOrszagok[index] = prompt((index+1) + ". ország: ");        
    if(europaiOrszagok[index].length >= 3){
        kiirandoSzoveg += europaiOrszagok[index];
        if(index<4) kiirandoSzoveg+=", "; 
        index++;
    }else(
        alert("A minimum karakterek száma 3. Próbálja újra!")
    )
}
document.getElementById("a").innerHTML = kiirandoSzoveg;

//1.b
europaiOrszagok.pop();
kiirandoSzoveg = "";
for (let i = 0; i < europaiOrszagok.length; i++) {    
    kiirandoSzoveg += europaiOrszagok[i]
    if(i<europaiOrszagok.length-1) {
        kiirandoSzoveg += ", ";
    } 
}
document.getElementById("b").innerHTML = kiirandoSzoveg;

//1.c
let oceania = ["Ausztrália", "Szamoa"];

//1.d
let azsia = ["India", "Irak", "Katar"];
azsia.splice(2, 0, ["Japán", "Kína"]);

//1.e
kiirandoSzoveg = "";
let orszagok = europaiOrszagok.concat(oceania, azsia);
for (let i = 0; i < orszagok.length; i++) {    
    kiirandoSzoveg += orszagok[i];
    if(i<orszagok.length-1) {
        kiirandoSzoveg += ", ";
    } 
}
 
document.getElementById("e").innerHTML = kiirandoSzoveg;

//1.f
kiirandoSzoveg = "";
let orszagokReszlet = orszagok.slice(2, 6);
for(let i = 0; i < orszagokReszlet.length; i++){
    kiirandoSzoveg += orszagokReszlet[i];
    if(i<orszagokReszlet.length-1) {
        kiirandoSzoveg += ", ";
    } 
}
document.getElementById("f").innerHTML = kiirandoSzoveg;

//1.g
kiirandoSzoveg = "";
orszagok.sort();
for (let i = 0; i < orszagok.length; i++) {
    kiirandoSzoveg += orszagok[i];
    if(i<orszagok.length-1) {
        kiirandoSzoveg += ", ";
    }   
}
document.getElementById("g").innerHTML = kiirandoSzoveg;

//1.h
kiirandoSzoveg = "";
orszagok.reverse();
for (let i = 0; i < orszagok.length; i++) {
    kiirandoSzoveg += orszagok[i];
    if(i<orszagok.length-1) {
        kiirandoSzoveg += ", ";
    }   
}
document.getElementById("h").innerHTML = kiirandoSzoveg;

