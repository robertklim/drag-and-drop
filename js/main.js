const filled = document.querySelector('.filled');
const empties = document.querySelectorAll('.empty');

filled.addEventListener('dragstart', dragStart);
filled.addEventListener('dragend', dragEnd);

function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = '.fill';
}
