function TTI(){    
    let suly = Number(document.getElementById("suly").value);
    let magassag = Number(document.getElementById("magassag").value); 
    let tti = suly/Math.pow(magassag/100, 2);
    let eredmeny = document.getElementById("eredmeny")
    
    if (tti<16) {
        eredmeny.innerHTML = "Az Ön test-tömeg indexe " + tti.toLocaleString('hu-hu') + ". Ez azt jelenti, hogy Ön <strong>SÚLYOSAN SOVÁNY</strong>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.add("bg-light");
        eredmeny.classList.add("text-danger");
    } else if (tti<17){
        eredmeny.innerHTML = "Az Ön test-tömeg indexe " + tti.toLocaleString('hu-hu') + ". Ez azt jelenti, hogy Ön <strong>MÉRSÉKELTEN SOVÁNY</strong>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.add("bg-light");
        eredmeny.classList.add("text-warning");
    } else if (tti<18.5) {
        eredmeny.innerHTML = "Az Ön test-tömeg indexe " + tti.toLocaleString('hu-hu') + ". Ez azt jelenti, hogy Ön <strong>ENYHÉN SOVÁNY</strong>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.add("bg-light");
        eredmeny.classList.add("text-warning");
    } else if (tti<25) {
        eredmeny.innerHTML = "Az Ön test-tömeg indexe " + tti.toLocaleString('hu-hu') + ". Ez azt jelenti, hogy az Ön testsúlya <strong>NORMÁLIS</strong>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.add("bg-light");
        eredmeny.classList.add("text-success");
    } else if (tti<30){
        eredmeny.innerHTML = "Az Ön test-tömeg indexe " + tti.toLocaleString('hu-hu') + ". Ez azt jelenti, hogy Ön <strong>TÚLSÚLYOS</strong>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.add("bg-light");
        eredmeny.classList.add("text-warning");
    } else if (tti<35.5){
        eredmeny.innerHTML = "Az Ön test-tömeg indexe " + tti.toLocaleString('hu-hu') + ". Ez azt jelenti, hogy Önnek <strong>I. FOKÚ ELHÍZÁSA VAN</strong>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.add("bg-light");
        eredmeny.classList.add("text-danger");
    } else if (tti<40){
        eredmeny.innerHTML = "Az Ön test-tömeg indexe " + tti.toLocaleString('hu-hu') + ". Ez azt jelenti, hogy Önnek <strong>II. FOKÚ ELHÍZÁSA VAN</strong>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.add("bg-light");
        eredmeny.classList.add("text-danger");
    } else if (tti>40){
        eredmeny.innerHTML = "Az Ön test-tömeg indexe " + tti.toLocaleString('hu-hu') + ". Ez azt jelenti, hogy Önnek <strong>III. FOKÚ (SÚLYOS) ELHÍZÁSA VAN</strong>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.remove("bg-light");
        eredmeny.classList.add("bg-light");
        eredmeny.classList.add("text-danger");
    }
}

