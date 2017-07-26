var menu = (function () {

    function menu() {
        $.showIndicator();
    }

    function init() {
        menu();
        $.hideIndicator();
    }

    return {
        init: init
    }
})();

$(function () {
    $.showIndicator();
    menu.init();
});