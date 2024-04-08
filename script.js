// function hideDefaultValue(input) {
//     if (input.defaultValue === input.value) {
//         input.value = '';
//     }
//     input.onclick = null
// }

let diena = new Date();
let nedelasDiena = diena.getDay();
let dienasNosaukumi = ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturdiena', 'Piektdiena', 'Sestdiena'];
let dienasNosaukums = dienasNosaukumi[nedelasDiena];
document.getElementById("diena").innerHTML = dienasNosaukums
let datums = new Date();
let tagadejaisDatums = datums.toLocaleDateString();
document.getElementById("datums").innerHTML = tagadejaisDatums;

function kalkulatorsKMI() {
    let masa = parseFloat(document.getElementById("kilogrami").value)
    let augums = parseFloat(document.getElementById("centimetri").value)

    let kmi = masa / ((augums/100) * (augums/100))
    document.getElementById('rezultats').innerHTML = kmi.toFixed(2);
    if (kmi < 18) {
        document.getElementById("atbilde").innerHTML = "Zems"
    } else if (kmi > 18 && kmi < 25) {
        document.getElementById("atbilde").innerHTML = "Norma"
    } else {
        document.getElementById("atbilde").innerHTML = "Augsts"
    }
}