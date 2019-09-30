var dias = ["miercoles","jueves","viernes"];
let d = new Date();

document.getElementById("miercoles").style.display="none";
document.getElementById("jueves").style.display="none";
document.getElementById("viernes").style.display="none";

document.getElementById("unisonForm").style.display = "none";


document.getElementById(dias[d.getDay()-1]).style.display="grid";

function mostrarDia(diaNum){
    document.getElementById("miercoles").style.display="none";
    document.getElementById("jueves").style.display="none";
    document.getElementById("viernes").style.display="none";

    document.getElementById(dias[diaNum-1]).style.display="grid";
}

function mostrarPreguntas(value){
    if (value) {
        document.getElementById("unisonForm").style.display = "block";
        document.getElementById("noUnisonForm").style.display = "none";
    }else{
        document.getElementById("unisonForm").style.display = "none";
        document.getElementById("noUnisonForm").style.display = "block";
    }
}
