const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planButtons = document.querySelectorAll('.plan button');
const noButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for(button of planButtons) {
    button.addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove('open');
    closeModal();
});

noButton && noButton.addEventListener("click", closeModal);

function closeModal() {
    modal && modal.classList.remove('open');
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});