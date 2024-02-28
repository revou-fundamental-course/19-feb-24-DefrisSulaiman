let nama = prompt("isi nama kamu")
document.getElementById("nama").innerHTML = nama

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputText = document.getElementById("inputTeks").value;
    const inputTanggal = document.getElementById("inputTanggal").value;
    const inputGender = document.getElementById("inputGender").value;
    const inputPesan = document.getElementById("inputPesan").value;

    document.getElementById('name').innerHTML = ("Nama : " + inputText)
    document.getElementById('date').innerHTML = ("Tanggal Lahir : " + inputTanggal)
    document.getElementById('gender').innerHTML = ("Jenis Kelamin : " + inputGender)
    document.getElementById('msg').innerHTML = ("Pesan : " + inputPesan)

    
}) 