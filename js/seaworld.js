// $('#search').click(function () {
//     window.location.href = "#search";
//     $('.classify').hide();
//     $('.list').hide()
// })
$('#searchway').click(function () {
    $.router.load("#router2");
})
$('#searchtextBack').click(function () {
    $.router.back();
})