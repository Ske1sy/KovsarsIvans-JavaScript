function spele() {
    let randomSkaitlis = Math.floor(Math.random() * 100) + 1
    let dati = parseInt(document.getElementById("skaitlis").value)
    if (isNaN(dati) || dati < 1 || dati > 100) {
        document.getElementById("speles-rezultats").innerHTML = "Ievadiet skaitli no 1 līdz 100.";
    } else if (dati === randomSkaitlis) {
        document.getElementById("speles-rezultats").innerHTML = "Tu laimēji!";
        document.getElementById("speles-rezultats").style.color = "green"
    } else {
        document.getElementById("speles-rezultats").innerHTML = "Tu zaudēji.";
        document.getElementById("speles-rezultats").style.color = "red"
    }

    document.getElementById("rezultats").innerHTML = randomSkaitlis
}