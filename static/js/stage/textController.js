// 用来管理等待输入的文字

// 当前正在网页中展示的内容
var nowOn = [];
// 当前正在输入的单元
var curr = 0;
// 如果这是一个被注音的模块，
// 那么表示正在输入的注音的下标（从 0 开始）
// 否则为 0
var currUp = 0;

function clear() {
    // 清空上方所有文字
    nowOn = [];
    curr = currUp = 0;
}

function render() {
    // 从头渲染所有的内容
    // 这个可以改成「只渲染变化的内容」
    // 要加钱 QWQ

    // 清空已有内容
    $('#keys').empty();

    function renderSpan(content, isFinished, isBig = true) {
        let span = $('<span></span>');
        span.text(content);
        if (isBig)
            span.addClass('bigChar');
        else
            span.addClass('smallChar');
        if (isFinished)
            span.addClass('unactive');
        else
            span.addClass('active');
        return span;
    }

    function renderRuby(content, index) {
        // 渲染 <ruby> 元素
        // index 为当前的下标
        // ruby 形如 ['問題', 'も', 'ん', 'だ', 'い']

        // console.log(index);
        if (index == -1)
            index = content.length - 1;

        // 结果
        let ruby = $('<ruby></ruby>');

        // 生成底部汉字
        let rb = $('<rb></rb>');
        rb.text(content[0]);
        rb.addClass('bigChar');

        // 如果假名全部输入完毕，那么呈 unactive
        if (index == content.length - 1)
            rb.addClass('unactive');
        else
            rb.addClass('active');

        // 生成顶部假名
        let rt = $('<rt></rt>')
        for (let i = 1; i < content.length; ++i)
            rt.append(renderSpan(content[i], i <= index, false));

        ruby.append([rb, rt]);
        return ruby;
    }

    for (let i = 0; i < nowOn.length; ++i) {
        // 已经完成的内容
        let content = nowOn[i];
        if (typeof (content) == 'object') {
            // 本来想用三元运算符，
            // 后来感觉嵌套太多会很丑就换成了 if
            if (i < curr) {
                // 已经输入完毕
                $('#keys').append(renderRuby(content, -1));
            } else if (i == curr) {
                $('#keys').append(renderRuby(content, currUp));
            } else {
                // 还没输入到
                $('#keys').append(renderRuby(content, 0));
            }
        }
        else
            $('#keys').append(renderSpan(content, i < curr));
    }
}

function put(x) {
    if (typeof (x) == 'string') {
        // 保证格式统一
        x = [x];
    }
    clear();
    for (let i of x) {
        if (typeof (i) == 'string') {
            // 将 i 拆成一个个字符
            let tmp = i.split('');
            nowOn.push(...tmp);
        } else if (typeof (i) == 'object') {
            // 形如
            // [
            //     "問題",
            //     "もんだい"
            // ]
            let tmp = i[1].split('');
            nowOn.push([i[0], ...tmp]);
        }
    }
    // 渲染
    render();
}

function currChar() {
    // 获取当前字符
    let now = nowOn[curr];
    if (typeof (now) == 'object')
        return nowOn[curr][currUp + 1];
    return now;
}

function next() {
    // 向后移动一格
    // 返回值 true 表示成功并重新渲染
    // 返回值 false 表示已经到了末尾

    if(typeof(nowOn[curr]) == 'object'){
        // 是一个汉字词组
        // 检验上方是否拼写完成
        if(currUp + 2 < nowOn[curr].length){
            // 还有剩下的
            ++currUp;
            // 重新渲染
            render();
            return true;
        }
    }
    // 必须向右移动大字符
    if(curr < nowOn.length){
        ++curr;
        render();
    }
    return curr < nowOn.length;
}