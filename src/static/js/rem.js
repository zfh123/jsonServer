var rem =20;
window.onload = function () {
    changeW();
    window.addEventListener('resize', changeW, false);
    function changeW() {
        rem = 20/ 375 * document.documentElement.clientWidth;
        document.documentElement.style.fontSize = rem + 'px';
    }
    window.addEventListener('resize', changeW, false);
}