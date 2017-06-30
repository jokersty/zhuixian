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
$('.searchway-input').on('click',function () {
    $('#search').focus();
})