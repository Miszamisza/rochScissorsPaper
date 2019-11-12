var kamien = "kamien";
var nozyce = "nozyce";
var papier = "papier";

var pickkamien = document.getElementById(kamien);
var pickpapier = document.getElementById(papier);
var picknozyce = document.getElementById(nozyce);


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
    var rand = Math.floor(Math.random() * 3 + 1);
    if (rand == 1) {
        return kamien;
    } else if (rand == 2) {
        return nozyce;
    } else if (rand == 3) {
        return papier;
    }
}


function game(pick) {
    var compPick1 = compPick();
    if (pick === compPick1) {
        alert("Remis!\nKomputer wybrał: " + compPick1)
    } else if (pick === papier && compPick1 === "kamien" ||
        pick === kamien && compPick1 === "nozyce" ||
        pick === nozyce && compPick1 === "papier") {
        alert("Gracz wygrał!\nKomputer wybrał: " + compPick1)
    } else {
        alert("Komputer wygrał!\nKomputer wybrał: " + compPick1)
    }
}

