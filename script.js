document.addEventListener('DOMContentLoaded', function () {
    let curtirButtons = document.querySelectorAll('.curtir-btn');

    curtirButtons.forEach(button => {
        button.addEventListener('click', function () {
            let likesCount = this.querySelector('.likes-count');
            likesCount.textContent = parseInt(likesCount.textContent) + 1;
        });
    });
});