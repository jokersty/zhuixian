var seafood = (function () {

    function seafood(content) {
        $.showIndicator();
        $.ajax({
            url: "",
            data: content,
            success: function (result) {
                result = {data:[
                    {imgsrc: "img/yellow-croaker.png", foodName:"● 美味十足的黄鱼菜谱", foodEffect:"用于治疗淤血疥癣"},
                    {imgsrc: "img/yellow-croaker.png", foodName:"● 美味十足的黄鱼菜谱", foodEffect:"用于治疗淤血疥癣"},
                    {imgsrc: "img/yellow-croaker.png", foodName:"● 美味十足的黄鱼菜谱", foodEffect:"用于治疗淤血疥癣"},
                    {imgsrc: "img/yellow-croaker.png", foodName:"● 美味十足的黄鱼菜谱", foodEffect:"用于治疗淤血疥癣"}
                    ]};
                if(result.data) {
                    $("#food").html(template('foodList', result));
                }
                else if(result.data == "" || !result.data) {
                    $.alert("没有相关菜谱");
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
        seafood(content);

        $('.classify-content').find('li').on("click", function () {
            var type = $(this).val();
            content.type = type;
            seafood(content);
        })
        $('#goSearch').click(function () {
            var dish = $('#search').val();
            if(dish == "") {
                $.alert("请输入您要查询的菜谱")
            }else {
                $.router.back();
                content.type = "";
                content.dish = dish;
                seafood(content);
            }
        });
        $('#toSeafood').click(function () {
            window.location.href = "feast.html";
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
    seafood.init();
});
