function getAisatsu(){
    let now = new Date();
    let h = now.getHours();
    if(h <= 8)
        return "早上好";
    if(h <= 11)
        return "上午好";
    if(h <= 13)
        return "中午好";
    if(h <= 17)
        return "下午好";
    return "晚上好";
}
module.exports = {
    getAisatsu
}