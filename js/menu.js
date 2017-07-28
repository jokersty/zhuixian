var menu = (function () {

    function menu(content) {
        $.showIndicator();
        $.ajax({
            url: "",
            data: content,
            success: function (result) {
                result = { number: "6",
                    title: {imgsrc:"img/yellow-croaker.png", foodName:"● 美味十足的黄鱼菜谱", foodEffect:"用于治疗淤血疥癣", foodId:"1"},
                    data:[{imgsrc: "img/fish-dinner.png", fishName: "黄鱼菜", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true", menuId:"1"},
                        {imgsrc: "img/fish-dinner.png", fishName: "黄鱼菜", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true", menuId:"2"},
                        {imgsrc: "img/fish-dinner.png", fishName: "黄鱼菜", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true", menuId:"3"},
                        {imgsrc: "img/fish-dinner.png", fishName: "黄鱼菜", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false", menuId:"4"},
                        {imgsrc: "img/fish-dinner.png", fishName: "黄鱼菜", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false", menuId:"5"},
                        {imgsrc: "img/fish-dinner.png", fishName: "黄鱼菜", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false", menuId:"6"}]};
                if(result.data) {
                    $("#List").html(template('fishList', result));
                }
                else if(result.data == "" || !result.data) {
                    $.alert("没有相关菜");
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

    function getUrlParams(value) {
        var url = window.location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        value = theRequest;
        return value;
    }

    function init() {
        var menuId;
        var params = getUrlParams(menuId);
        var menuId = params.menuId;
        var content = {
            menuId: ""
        };
        content.menuId = menuId;
        menu(content);
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