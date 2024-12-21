const mechanikForm = document.getElementById('add-mechanik-form');
const mechanikTableBody = document.querySelector('#mechanik-table tbody');

let mechanicy = [];

function addMechanikToTable(mechanik, index) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${mechanik.imie}</td>
    <td>${mechanik.nazwisko}</td>
    <td>${mechanik.login}</td>
    <td>${mechanik.haslo}</td>
    <td><button class="delete-button" data-index="${index}">Usuń</button></td>
  `;
    mechanikTableBody.appendChild(row);
}

function handleDeleteMechanik(event) {
    const index = event.target.getAttribute('data-index');
    const mechanik = mechanicy[index];
    const confirmation = window.confirm("Czy napewno chcesz zwolnić mechanika");
    if (confirmation) {
        mechanicy.splice(index, 1);
        updateMechanikList();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const testMechanik = {
        imie: 'John',
        nazwisko: 'Doe',
        login: 'John',
        haslo: 'John1251',
    };
    mechanicy.push(testMechanik);
    updateMechanikList();
});

mechanikForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const login = document.getElementById('login').value;
    const haslo = document.getElementById('haslo').value;
    const newMechanik = { imie, nazwisko, login, haslo };
    mechanicy.push(newMechanik);
    mechanikForm.reset();
});

function updateMechanikList() {
    mechanikTableBody.innerHTML = '';
    mechanicy.forEach((mechanik, index) => {
        addMechanikToTable(mechanik, index);
    });
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', handleDeleteMechanik);
    });
}
const naprawy = [
    {
    id_naprawy: 1,
    data_rozpoczęcia: '2024-10-12',
    data_zakończenia: '2024-10-18',
    opis_usterki: 'Przedziurawiona miska olejowa',
    stan: 'Rozpoczęty',
    protokół_naprawy: 'Po demontażu „starej” miski oczyszczono i odtłuszczono elementy przylegające (blok silnika i powierzchnię styku miski olejowej).Schnięcie masy uszczelniającej wynosiło 6-10 godz. Olej silnikowy wlano dopiero po całkowitym wyschnięciu masy',
    login: 'Zdzisław',
    vin: 'ABSDAE221293821283'
    }
]
const naprawaTable = document.getElementById('naprawa-table');

function renderNaprawy() {
    naprawaTable.innerHTML = '';
    naprawy.forEach(naprawa => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${naprawa.id_naprawy}</td>
          <td>${naprawa.data_rozpoczecia}</td>
          <td>${naprawa.data_zakonczenia}</td>
          <td>${naprawa.opis_usterki}</td>
          <td>${naprawa.stan}</td>
          <td>
            <button class="read-more" onclick="toggleDetails(${naprawa.id})">Read More</button>
            <div class="details" id="details-${naprawa.id}">${naprawa.protokół_naprawy}</div>
          </td>
          <td>${naprawa.login_mechanika}</td>
          <td>${naprawa.vin_pojazdu}</td>
        `;
        naprawaTable.appendChild(row);
    });
}

function toggleDetails(naprawaId) {
    const detailsDiv = document.getElementById(`details-${naprawaId}`);
    if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
        detailsDiv.style.display = 'block';
    } else {
        detailsDiv.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', renderNaprawy);

