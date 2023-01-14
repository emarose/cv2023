const check = document.getElementById("checking");
const sim = document.getElementById("simple");
const ext = document.getElementById("extendido");
const body = document.getElementById("body");
const mostrar = () => {
  if (!sim.classList.contains("hidden")) {
    sim.classList.add("hidden");
  } else {
    sim.classList.remove("hidden");
  }

  if (!ext.classList.contains("hidden")) {
    ext.classList.add("hidden");
  } else {
    ext.classList.remove("hidden");
  }
};

check.addEventListener("click", mostrar);

function changeFont() {
  if (body.classList.contains("roboto")) {
    body.style.fontFamily = "Open Sans";
    body.classList.remove("roboto");
    body.classList.add("opensans");
  } else {
    body.style.fontFamily = "Roboto Mono";
    body.classList.remove("opensans");
    body.classList.add("roboto");
  }
}
