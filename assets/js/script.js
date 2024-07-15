function changeBackgroundAndText() {
    document.body.classList.add('change-background');
    document.getElementById('main-title').textContent = 'WELCOME TO MY';
}

function revertBackgroundAndText() {
    document.body.classList.remove('change-background');
    document.getElementById('main-title').textContent = 'PERSONAL';
}
