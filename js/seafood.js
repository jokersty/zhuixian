$('#toSeafood').click(function () {
    window.location.href = "feast.html";
});
$('#searchway').click(function () {
    $.router.load("#router2");
})
$('#searchtextBack').click(function () {
    $.router.back();
})