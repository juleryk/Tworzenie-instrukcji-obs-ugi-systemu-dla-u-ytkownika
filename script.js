document.addEventListener('DOMContentLoaded', function () {
    let vid = document.querySelector('video');
    
    for (let i = 1; i <= 9; i++) {
        let link = document.getElementById('lin' + i);
        link.addEventListener('click', function() {
            let href = link.getAttribute('href');
            vid.currentTime = parseFloat(href.slice(1));
        });
    }
});
