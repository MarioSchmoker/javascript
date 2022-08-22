let contador = 0;
function contarClicks() {
  contador++;
  document.getElementById("cuenta").innerHTML =
    "Se realizaron " + contador + " clicks";
}

document.querySelector(".parrafoDom").innerHTML = "<h4> Agregado desde js";

let btn = document.getElementById("btn-contar");
btn.addEventListener("click", contarClicks);
