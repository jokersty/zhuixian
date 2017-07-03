var feast = (function () {

    function feast(content) {
        $.showIndicator();
        $.ajax({
            url: "",
            data: content,
            success: function (result) {
                result = { number: "6",
                    title: {imgsrc:"img/yellow-croaker.png", foodName:"● 美味十足的黄鱼菜谱", foodEffect:"用于治疗淤血疥癣", foodId:"1"},
                    data:[{imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"true"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"},
                    {imgsrc: "img/fish-dinner.png", fishName: "黄鱼", fishText: "黄鱼，有大小黄鱼之分，又名黄花鱼。", isNew:"false"}]};
                if(result.data) {
                    $("#List").html(template('fishList', result));
                    $("#listNumber").text(result.number);
                    $("#foodtitle").css("background-image",'url('+result.title.imgsrc+')');
                    $("#foodName").text(result.title.foodName);
                    $("#foodEffect").text(result.title.foodEffect);
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
        var foodId;
        var params = getUrlParams(foodId);
        var foodId = params.foodId;
        var content = {
            foodId: ""
        };
        content.foodId = foodId;
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