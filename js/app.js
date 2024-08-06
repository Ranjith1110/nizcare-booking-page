
//   Fetching data from json file start
document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('corporate-json');

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

//   Menubar function start
document.getElementById('menu-toggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('sidebar-hidden');
    mainContent.classList.toggle('full-width');
});
//   Menubar function start

