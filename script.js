const img = document.querySelector(".content .kado");
const kata = document.querySelector(".content .kata");
const button = document.querySelectorAll(".content button");
const ctn = document.querySelector(".content");

// --- PENGATURAN NOMOR WA & PESAN ---
const nomorWA = "6282292822610";
const pesanWA = "Hai Incess, i justt want to say keep spirit for today nah. its okay if you need some space, yang penting disana baik baikji dsna! . I'll be always waiting you ✨ (pesan rahasia ini jdi klo sdh di baca hapusmi saja ! 🤫😋)";

function clik(btn) {
  if (btn.textContent == "Iya 🤗") {
    // 1. Matikan musik
    const msk = document.getElementById("lagu");
    msk.pause();

    // 2. Ubah tampilan website
    img.src = "malu.gif";
    kata.textContent = "😍 ni buat si comel Incess 🍊";
    
    // 3. LOGIKA PINDAH WA (Gunakan window.open jika window.location gagal)
    const urlWA = "https://api.whatsapp.com/send?phone=" + nomorWA + "&text=" + encodeURIComponent(pesanWA);
    
    // Mencoba pindah secara otomatis
    setTimeout(function() {
        window.location.assign(urlWA);
    }, 500);

  } else {
    img.src = "patahHati.gif";
    kata.textContent = "😭😭😭😭😭😭";
  }
  
  button[0].style.display = "none";
  button[1].style.display = "none";
  ctn.style.height = "250px";
  ctn.style.width = "270px";
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
