function egyenlet(){    
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    let eredmeny = document.getElementById("eredmeny");

    let discriminant = Math.sqrt(Math.pow(b, 2)-4*a*c);

    if (discriminant > 0) {
        //két valós gyöke van
        let x1 = (-1*b+discriminant)/(2*a);
        let x2 = (-1*b-discriminant)/(2*a);

        eredmeny.innerHTML = "<h2>Az egyenletnek két valós gyöke van, azaz két pontban érinti az x tengelyt:</h2><p>x<sub>1</sub> = " + x1 + "</p><p>x<sub>2</sub> = " + x2;
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.add("text-success")
    } else if (discriminant == 0) {
        //egy valós gyöke van
        let x = (-1*b)/(2*a);
        eredmeny.innerHTML = "<h2>Az egyenletnek egy valós gyöke van, azaz egy pontban érinti az x tengelyt:</h2><p>x = " + x + "</p>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.add("text-warning")
    } else {
        //nincs valós gyöke, azaz az egyenlet nem érinti az x tengelyt
        eredmeny.innerHTML = "<h2>Az egyenletnek nincs valós gyöke, azaz nem érinti az x tengelyt</h2>";
        eredmeny.classList.remove("text-danger");
        eredmeny.classList.remove("text-warning");
        eredmeny.classList.remove("text-success");
        eredmeny.classList.add("text-danger")
    }
}

