var feast = (function () {

    function feast(content) {
        $.showIndicator();
        $.ajax({
            url: "",
            data: content,
            success: function (result) {
                result = { number: "6",
                    data:[{imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"}]};
                if(result.data) {
                    $("#List").html(template('fishList', result));
                    $("#listNumber").text(result.number);
                }
                else if(result.data == "" || !result.data) {
                    $.alert("没有相关海鲜");
                }
            },
            error : function () {
                $.alert('服务器错误');
            },
            complete: function() {
                $.hideIndicator();
            }
        });
    }

    function init() {
        var content = {
            type: "" ,
            dish: ""
        };
        content.type = 1;
        feast(content);
    }

    return {
        init: init
    }
})();

$(function () {
    $.showIndicator();
    feast.init();
});