const img = document.querySelector(".content .kado");
const kata = document.querySelector(".content .kata");
const button = document.querySelectorAll(".content button");
const ctn = document.querySelector(".content");

// --- PENGATURAN NOMOR WA & PESAN ---
const nomorWA = "6282292822610";
const pesanWA = "Hai Incess, i justt want to say keep spirit for today nah. its okay if you need some space, yang penting disana baik baikji dsna! . I'll be always waiting you ✨ (pesan rahasia ini jdi klo sdh di baca hapusmi saja ! 🤫😋)";

function clik(btn) {
  if (btn.textContent == "Iya 🤗") {
    // 1. Musik tetap jalan sesuai maumu
    const msk = document.getElementById("lagu");

    // 2. Tampilan Pertama (Muncul selama 3 detik)
    img.src = "malu.gif";
    kata.textContent = "Utututu... ni buat si comel Incess 🍊";
    
    // 3. Jeda 3 detik: Ganti ke kalimat transisi
    setTimeout(function() {
        kata.innerHTML = "Bentaar yaa.. <br> ada kado rahasia lari ke WA kamu! 🏃‍♂️💨";
    }, 3000);

    // 4. Jeda total 7 detik: Baru pindah ke WA
    setTimeout(function() {
        window.location.assign("https://api.whatsapp.com/send?phone=" + nomorWA + "&text=" + encodeURIComponent(pesanWA));
    }, 7000);

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
