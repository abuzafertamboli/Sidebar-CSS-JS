const hamburgerButton = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');

// hamburger button
hamburgerButton.addEventListener('click', (event) => {
    sidebar.classList.toggle('show-sidebar');
})

// close button
closeButton.addEventListener('click', (event) => {
    sidebar.classList.remove('show-sidebar');
})