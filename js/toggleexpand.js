// document.addEventListener('DOMContentLoaded', function () {
//     const toggleHeader = document.querySelector('.toggle-header');
//     const toggleBody = document.querySelector('.toggle-body');

//     toggleHeader.addEventListener('click', function () {
//         if (toggleBody.style.display === 'none') {
//             toggleBody.style.display = 'block';
//         } else {
//             toggleBody.style.display = 'none';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    var toggleHeader = document.querySelector('.toggle-header');
    if(toggleHeader) { // Memeriksa jika elemen ada sebelum mengakses propertinya
        toggleHeader.addEventListener('click', function() {
            var toggleBody = document.querySelector('.toggle-body');
            if(toggleBody) { // Memeriksa jika elemen ada sebelum mengakses propertinya
                toggleBody.style.display = toggleBody.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
});