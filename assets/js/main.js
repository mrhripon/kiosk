document.addEventListener('DOMContentLoaded', () => {

    // Script for Input fill/un-fill state 
    const inputs = document.querySelectorAll('.input-box input');
    inputs.forEach(each => {
        each.addEventListener('keyup', function (event) {
            if (event.target.value !== '') {
                each.classList.add('filled')
            } else {
                each.classList.remove('filled')
            }
        })
    })






    // Script for Congratulation popup to user for Sign-In
    if (document.querySelector('[data-collection-end="congratulations"]') !== null) {
        const dataCollectionEndButton = document.querySelector('[data-collection-end="congratulations"]')
        dataCollectionEndButton.addEventListener('click', function (event) {
            event.preventDefault();
            let congratulationWrap = document.getElementById('congratulation-msg');
            congratulationWrap.parentElement.classList.add('congratulation');
        })
    }



})