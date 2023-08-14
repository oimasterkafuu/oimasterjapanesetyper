// 教练
// 负责主持各项服务

export async function messager(content) {
    // 隐藏键盘
    toNothing();
    await swal({
        title: '来自 oimasterkafuu',
        text: content,
        closeOnClickOutside: false,
        closeOnEsc: false,
        button: '继续'
    });
}
export async function type(content, test = false) {
    if (content == "") {
        // ???
        return;
    }
    // 给我印上去！
    put(content);
    // 如果是测验，那么去掉键盘上的字
    if (test)
        toNothing();
    // 无限问 next，直到结束
    do {
        let now = currChar();
        // 如果这个字符是一个标点，那么往后找
        let found = true;
        while (!isHiragana(now) && !isKatakana(now)) {
            let go = next();
            if (go == false) {
                found = false;
                break;
            }
            now = currChar();
        }
        if (found == false) {
            // 剩下的东西全都是标点
            break;
        }

        // console.log(now);

        // 打字方法
        let needType;

        // 分情况讨论
        // 平假名
        if (isHiragana(now)) {
            // 先换个键盘
            toHiragana(!test);
            needType = typeHiragana(now);
        }
        else {
            // 那只能是片假名
            toKatakana(!test);
            needType = typeKatakana(now);
        }

        setKey(needType);
        // 等待完成信号
        const finished = () => new Promise(resolve => {
            function listenMessager(e) {
                if (e.data == 'finished!!') {
                    removeEventListener('message', listenMessager);
                    resolve();
                }
            }
            addEventListener('message', listenMessager);
        });
        let timeout, interval;
        if(test == false){
            timeout = setTimeout(() => {
                interval = setInterval(() => {
                    // 提示灯闪烁
                    if ($('div#keyInfo.hint').length > 0) {
                        // 已经亮了
                        $('div#keyInfo').removeClass('hint');
                    } else {
                        // 还没有亮
                        $('div#keyInfo').addClass('hint');
                    }
                }, 1000)
            }, 6000);
        }
        await finished();
        if(timeout)
            clearTimeout(timeout);
        if (interval)
            clearInterval(interval);
    } while (next());
    put('');
}