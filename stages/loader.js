// 此文件用于读取关卡
// 关卡一律存在同一目录下（即 stages 目录），不支持子目录
// 会自动识别所有的 .json 文件

const fs = require('fs');
const path = require('path');
var stages = [];

fs.readdir(__dirname, (err, files) => {
    // 基于 readdir 的特性，会以文件名排序，所以最好标记为 00.json、01.json、02.json 等等
    if(err){
        console.log('error when reading stages', error);
    } else {
        files.forEach((file) => {
            if(path.extname(file) == ".json"){
                // console.log('found stage file', file);
                stages.push(require(path.join(__dirname, file)));
            }
        });
    }
});

module.exports = stages;