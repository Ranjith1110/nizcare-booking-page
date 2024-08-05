
// document.getElementById('menu-toggle').addEventListener('click', function () {
//     document.getElementById('sidebar').classList.toggle('sidebar-hidden');
// });

document.getElementById('menu-toggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('sidebar-hidden');
    mainContent.classList.toggle('full-width');
});