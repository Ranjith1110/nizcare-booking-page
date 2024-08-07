

//   Index Page input field start
document.getElementById('myForm').addEventListener('submit', function(event) {
    let isValid = true;
    const fromDate = document.getElementById('from-date').value;
    const toDate = document.getElementById('to-date').value;
    const corporateName = document.getElementById('corporate-name').value;
    const status = document.getElementById('status').value;
    const dateRadios = document.getElementsByName('date');
    let dateSelected = false;

    for (const radio of dateRadios) {
        if (radio.checked) {
            dateSelected = true;
            break;
        }
    }

    if (!fromDate) {
        document.getElementById('ind-from-date').innerHTML = 'Please select a From Date';
        isValid = false;
        setTimeout(() => {
            document.getElementById('ind-from-date').innerHTML = '';
        }, 3000);
    }
    if (!toDate) {
        document.getElementById('ind-to-date').innerHTML = 'Please select a To Date';
        isValid = false;
        setTimeout(() => {
            document.getElementById('ind-to-date').innerHTML = '';
        }, 3000);
    }
    if (!corporateName) {
        document.getElementById('ind-corporate').innerHTML = 'Please select a Corporate Name';
        isValid = false;
        setTimeout(() => {
            document.getElementById('ind-corporate').innerHTML = '';
        }, 3000);
    }
    if (!status) {
        document.getElementById('ind-status').innerHTML = 'Please select a Status';
        isValid = false;
        setTimeout(() => {
            document.getElementById('ind-status').innerHTML = '';
        }, 3000);
    }
    if (!dateSelected) {
        document.getElementById('ind-date-option').innerHTML = 'Please select a Date Option';
        isValid = false;
        setTimeout(() => {
            document.getElementById('ind-date-option').innerHTML = '';
        }, 3000);
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});

function clearForm() {
    document.getElementById('myForm').reset();
}
//   Index Page input field end

//   Menubar function start
document.getElementById('menu-toggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('sidebar-hidden');
    mainContent.classList.toggle('full-width');
});
//   Menubar function start

//   Fetching data from json file start
document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('center-city-name');

    fetch('cities.json')
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            city.forEach(corp => {
                const option = document.createElement('option');
                option.value = corp;
                option.textContent = corp;
                selectElement.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
//   Fetching data from json file end

//   Mood of Apponitment start
function switchContent() {
    const selectElement = document.getElementById('contentSelector');
    const selectedContent = selectElement.value;

    // Hide all content divs
    const contents = document.getElementsByClassName('content');
    for (let content of contents) {
        content.style.display = 'none';
    }

    // Show the selected content div
    if (selectedContent === 'home') {
        document.getElementById('homeCollection').style.display = 'block';
    } else if (selectedContent === 'center') {
        document.getElementById('centerVisit').style.display = 'block';
    }
}
//   Mood of Apponitment end

//   Data searching start
document.getElementById('search-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search').value.toLowerCase();
    const tableBody = document.getElementById('table-body');
    const rows = tableBody.getElementsByTagName('tr');
    let dataFound = false;

    for (const row of rows) {
        const appointmentId = row.getElementsByClassName('people')[0].innerText.toLowerCase();
        const name = row.getElementsByClassName('active')[0].innerText.toLowerCase();

        if (appointmentId.includes(searchInput) || name.includes(searchInput)) {
            row.style.display = '';
            dataFound = true;
        } else {
            row.style.display = 'none';
        }
    }
});
//   Data searching end

