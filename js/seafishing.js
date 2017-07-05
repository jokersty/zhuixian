var demo = (function () {

    function demo() {
        $.showIndicator();
    }

    function init() {
        demo();
        $.hideIndicator();
    }

    return {
        init: init
    }
})();

$(function () {
    $.showIndicator();
    demo.init();
});