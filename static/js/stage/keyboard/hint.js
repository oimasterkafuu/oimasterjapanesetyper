$(() => {
    $(document).keydown((e) => {
        if(e.which != 192){
            $('.hint').removeClass('hint');
            return;
        };
        // 按下了 Info 键
        // 显示提示

        if(waitKeyIds.length == 0) {
            // 没有什么可以提示的
            return;
        }

        console.log('hint', waitKeyIds);
        // 高亮提示

        if (needShift) {
            // 有两个 Shift
            $('#keyShiftLeft').addClass('hint');
            $('#keyShiftRight').addClass('hint');
        }
        for(let id of waitKeyIds){
            $('#key' + id).addClass('hint');
        }
    });
    $(document).keyup((e) => {
        if(e.which != 192) return;
        $('.hint').removeClass('hint');
    })
});