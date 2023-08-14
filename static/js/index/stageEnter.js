// 用于首页「按下 Enter 键进入关卡」

$(() => {
    $(document).keypress((e) => {
        if (e.which == 13) {
            // 用户按下换行符
            // 检验是否解锁

            // currStage 表示当前的关卡数

            let isLocked = $('#stage' + currStage).attr('locked');
            if (isLocked == "false") {
                // 进入
                // 不要这么急！先加个特效 QWQ
                $('div.selector-highlight').css({
                    'box-shadow': '0 -6px 10px #eff, 0 4px 100px 1000px rgba(238, 255, 255, 0.8)'
                });
                setTimeout(() => {
                    location = '/stage/' + currStage + '/';
                    $('div.selector-highlight').css({
                        'box-shadow': ''
                    });
                }, 1500);
                // 如果用户通过开发者工具修改 locked，后端会返回 403。
            } else {
                // 诚实的用户（可能根本不会使用开发者工具）
                // 用一个弹窗打回，极其美观
                swal({
                    icon: 'error',
                    title: '错误',
                    text: '您似乎还没有解锁这一关。',
                    timer: 1000,
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: false
                });
            }
        }
    });
});