$(() => {
    $("div.stageTitle").each(function () {
        let div = $(this);
        // 获取 div 的宽和高
        let width = div.width();
        // 文字总长度
        let len = div[0].innerText.length;
        // 文字大小
        let fontw = width / len / 1.1;
        // 太大不好
        fontw = Math.min(fontw, 70);
        div.css({
            "font-size": fontw + "px"
        });
    });
})