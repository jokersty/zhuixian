var fishes = (function () {

    function fishes() {
        $.showIndicator();
    }

    function init() {
        fishes();
        $.hideIndicator();
    }

    return {
        init: init
    }
})();

$(function () {
    $.showIndicator();
    fishes.init();
});