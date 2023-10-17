let areaCheckbox = document.getElementById('checkbox');
let areaButton = document.querySelector('.button');


areaButton.addEventListener('click', function () {
    if (areaCheckbox.checked) {
        firstPage.classList.add('hidden')
        secondPage.classList.remove('hidden')
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please accept the agreement to proceed'
        });
    }
});
