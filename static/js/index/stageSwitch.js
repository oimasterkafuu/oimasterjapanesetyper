$(() => {
    // 用于首页「方向键切换关卡」的设计
    $(document).keyup((e) => {
        // 因为 keydown 函数会无限地触发，
        // keypress 函数不支持解析方向键，
        // 所以只能使用 keyup 专门监控方向键的「弹起」
        let key = e.which;
        if (key == 37 || key == 38) {
            // 左方向键、上方向键
            if (currStage > 0) {
                --currStage;
                // 要移动的长度就是一个方块的边长
                // 方块的原本长度是 250px
                // 加上 border 的 2 px * 2
                // 最后加上 margin 的 10px * 2
                // 得 250px + 2px * 2 + 10px * 2 = 274px
                $('div.stageChooser').animate({
                    left: '+=274px'
                }, 200);
            }
        } else if (key == 39 || key == 40) {
            // 右方向键、下方向键
            if (currStage + 1 < numStage) {
                ++currStage
                $('div.stageChooser').animate({
                    left: '-=274px'
                }, 200);
            }
        }
    });
});