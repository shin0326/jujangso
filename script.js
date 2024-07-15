window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.top = '-60px'; // 상단바 높이만큼 숨김
    } else {
        header.style.top = '0';
    }
});
