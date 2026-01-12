const img = document.querySelector(".content .kado");
const kata = document.querySelector(".content .kata");
const button = document.querySelectorAll(".content button");
const ctn = document.querySelector(".content");

function clik(btn) {
  btn.textContent == "Iya 🤗" ? (img.src = "malu.gif") : (img.src = "patahHati.gif");
  button[0].style.display = "none";
  button[1].style.display = "none";
  ctn.style.height = "250px";
  ctn.style.width = "270px";
  return btn.textContent == "Iya 🤗" ? (kata.textContent = "😍 ni buat si comel Incess 🍊") : (kata.textContent = "😭😭😭😭😭😭");
}

function content() {
  ctn.style.display = "flex";
  ctn.style.width = "300px";
  ctn.style.height = "400px";
  kata.textContent = "Hay Incess, cuma mau ucapin, semangat ya 😊"; 
}

function pesanHilang() {
  document.querySelector(".pesan").style.display = "none";
  content();
  fullLayar();
  musik();
}

const btnEnggak = document.getElementById("btnEnggak");
function pindah() {
  const x = Math.random() * (window.innerWidth - btnEnggak.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnEnggak.offsetHeight);
  btnEnggak.style.left = `${x}px`;
  btnEnggak.style.top = `${y}px`;
}
btnEnggak.addEventListener("mouseover", pindah);
btnEnggak.addEventListener("touchstart", (e) => { e.preventDefault(); pindah(); });

function musik() {
  const msk = document.getElementById("lagu");
  msk.play();
  msk.loop = true;
}

function fullLayar() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) { elem.requestFullscreen(); }
}
