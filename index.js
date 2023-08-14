const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const { num2hanzi } = require('./lib/num2hanzi');
const { shuffle } = require('./lib/shuffle');
const { getAisatsu } = require('./lib/aisatsu');
const stages = require('./stages/loader');

const app = express();

// 基本设置
app.use(cookieParser('oimasterkafuu8db3f1'));
app.set('view engine', 'ejs');
app.listen(80);

// 静态文件
app.use('/static', express.static(path.join(__dirname, 'static')));

// 是否渲染「初次访问」页面
app.get('/init', (req, res, next) => {
    res.cookie('visited', 'true', { signed: true, maxAge: 31536000000 , httpOnly: true }); // 365 天
    res.cookie('finish', '[]', { signed: true, maxAge: 31536000000 , httpOnly: true });
    res.redirect('/');
})
app.get('*', (req, res, next) => {
    if (!req.signedCookies.visited || !req.signedCookies.finish) {
        res.render('firstVisit');
        return;
    }
    next();
});

// 首页
app.locals.num2hanzi = num2hanzi;
app.locals.getAisatsu = getAisatsu;
app.get('/', (req, res) => {
    let finish = req.signedCookies.finish;
    // typeof (finish) -> 'string'
    finish = JSON.parse(finish);
    res.render('index', { stages, finish });
});

// 关卡
app.locals.shuffle = shuffle;
app.get('/stage/:stageId', (req, res, next) => {
    let stageId = req.params.stageId;

    // stageId 是否合法
    stageId = parseInt(stageId); // parseInt('hello') -> NaN
    if ((stageId != 0 && !stageId) || stageId < 0 || stageId >= stages.length) {
        // 当 stageId == NaN 时，只能用 !stageId 检测出
        // 丢给 404 处理
        next();
        return;
    }

    // 是否能够进入
    let pre = stages[stageId].pre;
    let finish = req.signedCookies.finish;
    finish = JSON.parse(finish);
    for (let i of pre)
        if (!finish[i]) {
            // 关卡锁定状态
            res.status(403);
            res.render('reallyUnlocked', { stageId });
            return;
        }

    res.status(200);
    res.render('stage', { stageId, stage: stages[stageId] });
});

app.post('/finished/:stageId', (req, res, next) => {
    let stageId = req.params.stageId;

    // stageId 是否合法
    stageId = parseInt(stageId); // parseInt('hello') -> NaN
    if ((stageId != 0 && !stageId) || stageId < 0 || stageId >= stages.length) {
        // 当 stageId == NaN 时，只能用 !stageId 检测出
        // 丢给 404 处理
        next();
        return;
    }

    
    // 是否能够进入
    let pre = stages[stageId].pre;
    let finish = req.signedCookies.finish;
    finish = JSON.parse(finish);
    for (let i of pre)
        if (!finish[i]) {
            // 关卡锁定状态
            // 根本不可能解锁
            res.status(403);
            res.render('reallyUnlocked', { stageId });
            return;
        }

    finish[stageId] = true;

    res.cookie('finish', JSON.stringify(finish), { signed: true, maxAge: 31536000000 , httpOnly: true });

    res.send( {status: 'ok'} );
});

// 所有函数没有接管，说明是 404 页面。
app.get('*', (req, res, next) => {
    res.status(404);
    res.render('notFound');
});