var seaworld = (function () {

    function seaworld(content) {
        $.showIndicator();
        $.ajax({
            url: "",
            data: content,
            success: function (result) {
                result = {data:[{imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"}]};
                if(result.data) {
                    $("#List").html(template('fishList', result));
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
        seaworld(content);

        $('.classify-content').find('li').on("click", function () {
            var type = $(this).val();
            content.type = type;
            seaworld(content);
        })
        $('#goSearch').click(function () {
            var dish = $('#search').val();
            if(dish == "") {
                $.alert("请输入您要查询的海鲜")
            }else {
                $.router.back();
                content.type = "";
                content.dish = dish;
                seaworld(content);
            }
        });
        $('#searchway').click(function () {
            $.router.load("#router2");
        })
        $('#searchtextBack').click(function () {
            $.router.back();
        })
        $('.searchway-input').on('click',function () {
            $('#search').focus();
        })
    }

    return {
        init: init
    }
})();

$(function () {
    $.showIndicator();
    seaworld.init();
});