let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let planButtons = document.querySelectorAll('.plan button');

for(button of planButtons) {
    button.addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}