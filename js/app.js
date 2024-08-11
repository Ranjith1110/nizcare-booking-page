//   Menubar function start
document.getElementById('menu-toggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('sidebar-hidden');
    mainContent.classList.toggle('full-width');
});
//   Menubar function start

//   Index Page input field start
document.getElementById('myForm').addEventListener('submit', function (event) {
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
//   Mood of Apponitment self and dependent start
function selfContent() {
    const selectElement = document.getElementById('selfSelector');
    const selectedContent = selectElement.value;

    const contents = document.getElementsByClassName('content');
    for (let content of contents) {
        content.style.display = 'none';
    }

    if (selectedContent === 'self-home') {
        document.getElementById('homeCollection').style.display = 'block';
    } else if (selectedContent === 'self-center') {
        document.getElementById('centerVisit').style.display = 'block';
    }
}

function dependentContent() {
    const selectElement = document.getElementById('dependentSelector');
    const selectedContent = selectElement.value;

    const contents = document.getElementsByClassName('hidden-content');
    for (let content of contents) {
        content.style.display = 'none';
    }

    if (selectedContent === 'dependent-self') {
        document.getElementById('homeCollectionForm').style.display = 'block';
    } else if (selectedContent === 'dependent-center') {
        document.getElementById('centerVisitForm').style.display = 'block';
    }
}
//   Mood of Apponitment self and dependent start

//   Data searching start
document.getElementById('search-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    let searchValue = document.getElementById('search').value.trim().toLowerCase();
    let tableBody = document.getElementById('table-body');
    let rows = tableBody.getElementsByTagName('tr');
    let noDataFound = document.getElementById('no-data');
    let found = false;

    for (let i = 0; i < rows.length; i++) {
        let appointmentId = rows[i].getElementsByTagName('td')[0].innerText.trim().toLowerCase();
        let name = rows[i].getElementsByTagName('td')[2].innerText.trim().toLowerCase();

        if (appointmentId === searchValue || name === searchValue) {
            rows[i].style.display = ''; // Show the row
            found = true;
        } else {
            rows[i].style.display = 'none'; // Hide the row
        }
    }

    if (!found) {
        noDataFound.style.display = 'block'; // Show "No Data Found"
    } else {
        noDataFound.style.display = 'none'; // Hide "No Data Found"
    }
});
//   Data searching end

//   Download by Excel format start
function downloadExcel() {
    var table = document.getElementById("table-body");
    var rows = table.querySelectorAll("tr");

    var data = [["Appointment Id", "Corporate Name", "Name", "Email id", "Mobile", "Action"]];

    rows.forEach(function (row) {
        var rowData = [];
        var cells = row.querySelectorAll("td");

        cells.forEach(function (cell) {
            rowData.push(cell.innerText);
        });

        data.push(rowData);
    });

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "Appointments");

    XLSX.writeFile(wb, "MyReport-Booking.xlsx");
}
//   Download by Excel format end



