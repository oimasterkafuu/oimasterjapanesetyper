// 播放机械键盘音效 js

// 提前生成 blob URL，防止过度请求服务器数据

var media = [];
for (let i = 1; i <= 5; ++i) {
    fetch('/static/media/' + i + '.wav')
        .then(res => res.blob())
        .then(blob => {
            media.push(URL.createObjectURL(blob));
        })
}


$(() => {
    $(document).keydown((e) => {
        if(waitKeyIds.length == 0) return;
        if(num2key[e.which].length > 3){
            // 功能键
            return;
        }
        let id = e.keyCode % 5;
        // 请注意，每当播放一次音效，均会请求一遍数据。
        // p.s. 在新版 blob 的支持下，仅会在本地请求。
        let sound = new Audio(media[id]);
        sound.loop = false;
        sound.play();
    });
});