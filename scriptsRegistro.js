document.getElementById("Unilocal").style.display = "none";

function mostrarPreguntas(value){
    if (value) {
        document.getElementById("Unilocal").style.display = "block";
        document.getElementById("UniExterna").style.display = "none";
    }else{
        document.getElementById("Unilocal").style.display = "none";
        document.getElementById("UniExterna").style.display = "block";
    }
}
