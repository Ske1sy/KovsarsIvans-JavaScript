function hideDefaultValue(input) {
    if (input.defaultValue === input.value) {
        input.value = '';
    }
    input.onclick = null
}

let diena = new Date();
let nedelasDiena = diena.getDay();
let dienasNosaukumi = ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturdiena', 'Piektdiena', 'Sestdiena'];
let dienasNosaukums = dienasNosaukumi[nedelasDiena];
document.write(dienasNosaukums);
let datums = new Date();
let tagadejaisDatums = datums.toLocaleDateString();
document.getElementById("datums").innerHTML = tagadejaisDatums;
