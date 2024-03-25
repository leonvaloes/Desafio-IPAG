var drops = document.querySelectorAll('.drop');
drops.forEach(function(drop) {
    drop.addEventListener('mouseover', function() {
        document.querySelector('.dropdown').style.display = 'block';
    });
    
    drop.addEventListener('mouseleave', function() {
        document.querySelector('.dropdown').style.display = 'none';
    });
});
