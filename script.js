const togglebutton = document.getElementById('toggle-button');
const sidebar = document.getElementById('side-bar');


togglebutton.addEventListener('click', show);

function show() {
    sidebar.classList.toggle('active');
}

// retirer la side bar quand on clique sur le contenu principal


const content = document.querySelector('.content');

content.addEventListener('click', () => {
    sidebar.classList.remove('active')
});