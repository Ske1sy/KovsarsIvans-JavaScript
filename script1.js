function spele() {
    let randomSkaitlis = Math.floor(Math.random() * 100) + 1
    let dati = parseInt(document.getElementById("skaitlis").value)
    if (isNaN(dati) || dati < 1 || dati > 100) {
        document.getElementById("speles-rezultats").innerHTML = "Ievadiet skaitli no 1 līdz 100."
        document.getElementById("speles-rezultats").style.color = "red";
    } else if (dati === randomSkaitlis) {
        document.getElementById("speles-rezultats").innerHTML = "Tu laimēji!";
        document.getElementById("speles-rezultats").style.color = "green"
    } else {
        document.getElementById("speles-rezultats").innerHTML = "Tu zaudēji.";
        document.getElementById("speles-rezultats").style.color = "red"
    }

    document.getElementById("rezultats").innerHTML = randomSkaitlis
}
let diena = new Date();
let nedelasDiena = diena.getDay();
let dienasNosaukumi = ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturdiena', 'Piektdiena', 'Sestdiena'];
let dienasNosaukums = dienasNosaukumi[nedelasDiena];
document.getElementById("diena").innerHTML = dienasNosaukums
let datums = new Date();
let tagadejaisDatums = datums.toLocaleDateString();
document.getElementById("datums").innerHTML = tagadejaisDatums;