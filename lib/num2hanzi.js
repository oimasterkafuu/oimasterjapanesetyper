const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

// 将一个阿拉伯数字（0 <= x < 100）转换为汉字

function num2hanzi(x){
    if(x < 0 || x >= 100)
        return '';
    if(x < 10)
        return num[x];
    if(x == 10)
        return '十';
    if(x < 20)
        return '十' + num[x % 10];
    if(x % 10 == 0)
        return num[Math.floor(x / 10)] + '十';
    return num[Math.floor(x / 10)] + '十' + num[x % 10];
}

// eg. num2hanzi(0) -> '零'
//     num2hanzi(23) -> '二十三'
//     num2hanzi(100) -> '' （超界不返回任何内容，不报错）

module.exports = {
    num2hanzi
};