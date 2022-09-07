let pokeBall1 = document.querySelector("#poke-ball-1");
let pokeBall2 = document.querySelector("#poke-ball-2");
let pokeBall3 = document.querySelector("#poke-ball-3");


/* function openPokemon(pokemonName) {
    let xhr = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    xhr.open("GET", url, true);
    xhr.onload = function(){
        if(xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            console.log(data);            
        }
    };
    xhr.send();
};
openPokemon("squirtle"); */

function addCard(pokemonName){
    let xhr = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    xhr.open("GET", url, true);
    xhr.onload = function(){
        if(xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            output = `
            <div class="card ${data.name}">        
                <p id="name">${data.name}</p>
                <p id="lvl">1</p>
                <div class="types">
                    ${getTypes()}
                </div>
            </div> 
            `
            function getTypes(){
                let output2 = "";
                for(type in data.types){
                    output2 += `<p>${data.types[type].type.name}</p>`
                }
                return output2;
            }

            document.querySelector(".inventory").innerHTML += output;
            document.querySelector(`.${data.name}`).style.backgroundImage = `url(${data.sprites.front_default})`;
            document.querySelector(".current-pokemon").firstElementChild.style.backgroundImage = `url(${data.sprites.front_default})`;
            document.querySelector(".current-pokemon-name").innerHTML = data.name;
        }
    };
    xhr.send();
};

function selectPokemon(pokemonName){  
    
    document.querySelector(".inventory").hidden = false;
    document.querySelector(".current-pokemon").hidden = false;
    document.querySelector(".fight").style.display = "flex";
    document.querySelector(".choose-one").hidden = true;
    addCard(pokemonName);    
}

var chosenPokemon = "";

function choose(){
    selectPokemon(chosenPokemon);
    document.querySelector('.mobile').style.display = "none";
}

function mobileSelectPokemon(pokemonName){
    document.querySelector("#confirm").hidden = false;
    chosenPokemon = pokemonName;   
     
}






