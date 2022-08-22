let contador = 0;
function contarClicks() {
  contador++;
  document.getElementById("cuenta").innerHTML =
    "Se realizaron " + contador + " clicks";
}

document.querySelector(".parrafoDom").innerHTML =
  "<h4> Titulo agregado desde js</h4>";

let btn = document.getElementById("btn-contar");
btn.addEventListener("click", contarClicks);
