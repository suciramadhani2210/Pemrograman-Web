let number = document.getElementById("nomor");
let message = document.getElementById("message");

let count = 0;

number.innerText = count;
message.innerText = "Ayo mulai!";

function updateMessage() {
    if (count < 0) {
        message.innerText = "Jangan minus terus ya!";
    } else if (count === 0) {
        message.innerText = "Balik ke nol, ayo semangat!";
    } else if (count < 10) {
        message.innerText = "Mantap, lanjut!";
    } else {
        message.innerText = "Wah sudah tinggi banget, jangan lupa istirahat ya!";
    }
}

function tambah() {
    count++;
    number.innerText = count;
    updateMessage();
}

function kurang() {
    count--;
    number.innerText = count;
    updateMessage();
}

const btnTambah = document.getElementById("btnTambah");
const btnKurang = document.getElementById("btnKurang");

btnTambah.addEventListener("click", tambah);
btnKurang.addEventListener("click", kurang);