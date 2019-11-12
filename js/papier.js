let kamien = "kamien";
let nozyce = "nozyce";
let papier = "papier";

let pickkamien = document.getElementById(kamien);
let pickpapier = document.getElementById(papier);
let picknozyce = document.getElementById(nozyce);
let playerName;

document.querySelector("#name button")
    .addEventListener('click', function(){
        let inputEl = document.querySelector("#name input");
        playerName = inputEl.value;
        let game = document.querySelector(".container-button").style.display = "flex";
        let name = document.querySelector("#name").style.display = "none";

    });

pickkamien.addEventListener('click', function () {
    game(kamien)
});

pickpapier.addEventListener('click', function () {
    game(papier)
});

picknozyce.addEventListener('click', function () {
    game(nozyce)
});


function compPick() {
    let rand = Math.floor(Math.random() * 3 + 1);
    if (rand == 1) {
        return kamien;
    } else if (rand == 2) {
        return nozyce;
    } else if (rand == 3) {
        return papier;
    }
}


function game(pick) {
    let compPick1 = compPick();
    if (pick === compPick1) {
        alert("Remis!\nKomputer wybrał: " + compPick1)
    } else if (pick === papier && compPick1 === kamien ||
        pick === kamien && compPick1 === nozyce ||
        pick === nozyce && compPick1 === papier) {
        alert(playerName + " wygrał!\nKomputer wybrał: " + compPick1)
    } else {
        alert("Komputer wygrał!\nKomputer wybrał: " + compPick1)
    }
}

