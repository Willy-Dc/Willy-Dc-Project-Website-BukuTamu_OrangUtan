// Data 6 ekor orang utan
const orangutans = [
    {
        id: 1,
        name: "Dek Nong",
        gender: "Betina",
        rescue: "7 September 2007",
        age: "1999",
        condition: "Masalah artritis",
        image: "dek nong.jpeg",
    },
    {
        id: 2,
        name: "Dina",
        gender: "Betina",
        rescue: "27 Juli 2016",
        age: "2015",
        condition: "Buta",
        image: "dina.jpeg",
    },
    {
        id: 3,
        name: "Krismon",
        gender: "Jantan",
        rescue: "30 Mei 2016",
        age: "1996",
        condition: "Trauma dan kelemahan fisik",
        image: "krismon.jpeg",
    },
    {
        id: 4,
        name: "Lewis",
        gender: "Jantan",
        rescue: "30 Agustus 2016",
        age: "1991",
        condition: "Buta",
        image: "lewis.jpeg",
    },
    {
        id: 5,
        name: "Leuser",
        gender: "Jantan",
        rescue: "20 Februari 2004",
        age: "1999",
        condition: "Buta",
        image: "leuser.jpeg",
    },
    {
        id: 6,
        name: "Fahzren",
        gender: "Jantan",
        rescue: "9 Oktober 2013",
        age: "1998",
        condition: "Sudah dewasa dan terlalu terbiasa dengan manusia",
        image: "fahzren.jpeg",
    },

];

function openMenu() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}

const container = document.getElementById("orangutan-list");

orangutans.forEach((ou) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
  <img src="${ou.image}" alt="${ou.name}">
    <h3>${ou.name}</h3>
    <div class="info">Jenis kelamin: <strong>${ou.gender}</strong></div>
    <div class="info">Tanggal penyelamatan: <strong>${ou.rescue}</strong></div>
    <div class="info">Perkiraan Tahun Lahir: <strong>${ou.age}</strong></div>
    <div class="info">Konsidi: <strong>${ou.condition}</strong></div>
  `;

    container.appendChild(card);
});
