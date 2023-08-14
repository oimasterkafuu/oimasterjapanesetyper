var waitKeyIds = [];
var currKey = -1;
var needShift = false;

var illegalSound;

// multi 拖慢了打字速度
// var multi = false;

fetch('/static/media/illegal.mp3')
    .then(res => res.blob())
    .then(blob => {
        illegalSound = URL.createObjectURL(blob);
    });

$(() => {
    function playIllegal() {
        // 播放「错误」音效
        let errorSound = new Audio(illegalSound);
        errorSound.loop = false;
        errorSound.play();
    }
    $(document).keydown((e) => {
        // 检验是否需要按下按键
        if (currKey == -1)
            return;
        // if(multi && needShift == false)
        //     return;
        // multi = true;
        // console.log(e);
        if(num2key[e.which] == 'Shift' && needShift == false){
            playIllegal();
            currKey = 0;
            return;
        }
        if(num2key[e.which].length > 3)
            return;

        // 检验按键是否正确
        if (needShift) {
            if (e.shiftKey == false) {
                // 没有按下 Shift，直接打回
                playIllegal();
                currKey = 0;
                return;
            }
            if (num2key[e.which] != waitKeyIds[currKey]) {
                // 错键
                playIllegal();
                currKey = 0;
                return;
            }
            ++currKey;
            if (currKey >= waitKeyIds.length) {
                // 全部打完
                // 清空数据
                needShift = false;
                waitKeyIds = [];
                currKey = -1;
                postMessage('finished!!');
            }
            return;
        }
        if (num2key[e.which] != waitKeyIds[currKey]) {
            // 错键
            playIllegal();
            currKey = 0;
            return;
        }
        ++currKey;
        if (currKey >= waitKeyIds.length) {
            // 全部打完
            // 清空数据
            needShift = false;
            waitKeyIds = [];
            currKey = -1;
            postMessage('finished!!')
        }
    });
    // $(document).keyup(() => {
    //     multi = false;
    // })
});

function setKey(x) {
    if (typeof (x) == 'string')
        x = [x];
    if (x[0] == 'Shift') {
        needShift = true;
        x.shift();
    } else {
        needShift = false;
    }
    currKey = 0;
    waitKeyIds = x;
}