// 用于操作键盘
// 切换平假名、片假名，按下 Shift 的反应

// 痛苦 * 6
const hiraganaKeyboard = {
    'Info': '平', // 用于标记
    'Nu': 'ぬ',
    'Fu': 'ふ',
    'A': 'あ',
    'U': 'う',
    'E': 'え',
    'O': 'お',
    'Ya': 'や',
    'Yu': 'ゆ',
    'Yo': 'よ',
    'Wa': 'わ',
    'Ho': 'ほ',
    'P': '゜',
    'Backspace': '←',
    'Tab': '→',
    'Ta': 'た',
    'Te': 'て',
    'I': 'い',
    'Su': 'す',
    'Ka': 'か',
    'N': 'ん',
    'Na': 'な',
    'Ni': 'に',
    'Ra': 'ら',
    'Se': 'せ',
    'G': '゛',
    'Mu': 'む',
    'He': 'へ',
    'Capslock': 'Caps',
    'Chi': 'ち',
    'To': 'と',
    'Shi': 'し',
    'Ha': 'は',
    'Ki': 'き',
    'Ku': 'く',
    'Ma': 'ま',
    'No': 'の',
    'Ri': 'り',
    'Re': 'れ',
    'Ke': 'け',
    'Enter': 'Enter',
    'ShiftLeft': 'Shift',
    'Tsu': 'つ',
    'Sa': 'さ',
    'So': 'そ',
    'Hi': 'ひ',
    'Ko': 'こ',
    'Mi': 'み',
    'Mo': 'も',
    'Ne': 'ね',
    'Ru': 'る',
    'Me': 'め',
    'ShiftRight': 'Shift',
    'Space': ''
}

const shiftHiraganaKeyboard = {
    'Info': '平',
    'Nu': 'ぬ',
    'Fu': 'ふ',
    'A': 'ぁ',
    'U': 'ぅ',
    'E': 'ぇ',
    'O': 'ぉ',
    'Ya': 'ゃ',
    'Yu': 'ゅ',
    'Yo': 'ょ',
    'Wa': 'を',
    'Ho': 'ほ',
    'P': '゜',
    'Backspace': '←',
    'Tab': '→',
    'Ta': 'た',
    'Te': 'て',
    'I': 'ぃ',
    'Su': 'す',
    'Ka': 'か',
    'N': 'ん',
    'Na': 'な',
    'Ni': 'に',
    'Ra': 'ら',
    'Se': 'せ',
    'G': '゛',
    'Mu': 'む',
    'He': 'へ',
    'Capslock': 'Caps',
    'Chi': 'ち',
    'To': 'と',
    'Shi': 'し',
    'Ha': 'は',
    'Ki': 'き',
    'Ku': 'く',
    'Ma': 'ま',
    'No': 'の',
    'Ri': 'り',
    'Re': 'れ',
    'Ke': 'ろ',
    'Enter': 'Enter',
    'ShiftLeft': 'Shift',
    'Tsu': 'っ',
    'Sa': 'さ',
    'So': 'そ',
    'Hi': 'ひ',
    'Ko': 'こ',
    'Mi': 'み',
    'Mo': 'も',
    'Ne': 'ね',
    'Ru': 'る',
    'Me': 'め',
    'ShiftRight': 'Shift',
    'Space': ''
}

const katakanaKeyboard = {
    'Info': '片',
    'Nu': 'ヌ',
    'Fu': 'フ',
    'A': 'ア',
    'U': 'ウ',
    'E': 'エ',
    'O': 'オ',
    'Ya': 'ヤ',
    'Yu': 'ユ',
    'Yo': 'ヨ',
    'Wa': 'ワ',
    'Ho': 'ホ',
    'P': '゜',
    'Backspace': '←',
    'Tab': '→',
    'Ta': 'タ',
    'Te': 'テ',
    'I': 'イ',
    'Su': 'ス',
    'Ka': 'カ',
    'N': 'ン',
    'Na': 'ナ',
    'Ni': 'ニ',
    'Ra': 'ラ',
    'Se': 'セ',
    'G': '゛',
    'Mu': 'ム',
    'He': 'ヘ',
    'Capslock': 'Caps',
    'Chi': 'チ',
    'To': 'ト',
    'Shi': 'シ',
    'Ha': 'ハ',
    'Ki': 'キ',
    'Ku': 'ク',
    'Ma': 'マ',
    'No': 'ノ',
    'Ri': 'リ',
    'Re': 'レ',
    'Ke': 'ケ',
    'Enter': 'Enter',
    'ShiftLeft': 'Shift',
    'Tsu': 'ツ',
    'Sa': 'サ',
    'So': 'ソ',
    'Hi': 'ヒ',
    'Ko': 'コ',
    'Mi': 'ミ',
    'Mo': 'モ',
    'Ne': 'ネ',
    'Ru': 'ル',
    'Me': 'メ',
    'ShiftRight': 'Shift',
    'Space': ''
}

const shiftKatakanaKeyboard = {
    'Info': '片',
    'Nu': 'ヌ',
    'Fu': 'フ',
    'A': 'ァ',
    'U': 'ゥ',
    'E': 'ェ',
    'O': 'ォ',
    'Ya': 'ャ',
    'Yu': 'ュ',
    'Yo': 'ョ',
    'Wa': 'ヲ',
    'Ho': 'ホ',
    'P': '゜',
    'Backspace': '←',
    'Tab': '→',
    'Ta': 'タ',
    'Te': 'テ',
    'I': 'ィ',
    'Su': 'ス',
    'Ka': 'カ',
    'N': 'ン',
    'Na': 'ナ',
    'Ni': 'ニ',
    'Ra': 'ラ',
    'Se': 'セ',
    'G': '゛',
    'Mu': 'ム',
    'He': 'ヘ',
    'Capslock': 'Caps',
    'Chi': 'チ',
    'To': 'ト',
    'Shi': 'シ',
    'Ha': 'ハ',
    'Ki': 'キ',
    'Ku': 'ク',
    'Ma': 'マ',
    'No': 'ノ',
    'Ri': 'リ',
    'Re': 'レ',
    'Ke': 'ロ',
    'Enter': 'Enter',
    'ShiftLeft': 'Shift',
    'Tsu': 'ッ',
    'Sa': 'サ',
    'So': 'ソ',
    'Hi': 'ヒ',
    'Ko': 'コ',
    'Mi': 'ミ',
    'Mo': 'モ',
    'Ne': 'ネ',
    'Ru': 'ル',
    'Me': 'メ',
    'ShiftRight': 'Shift',
    'Space': ''
}

var shiftPressed = false;

function toHiragana(show = true) {
    // 显示每个键上面的假名
    if(show)
       $('.key').removeClass('noneKey');

    for (let i in hiraganaKeyboard) {
        $('#key' + i).text(hiraganaKeyboard[i]);
    }

    if (shiftPressed) // shift 正在被按下
        pressShift();
}
function toKatakana(show = true) {
    // 显示每个键上面的假名
    if(show)
        $('.key').removeClass('noneKey');

    for (let i in katakanaKeyboard) {
        $('#key' + i).text(katakanaKeyboard[i]);
    }

    if (shiftPressed) // shift 正在被按下
        pressShift();
}
function toNothing() {
    // 删除所有键盘内容
    // 准确地说，是让所有的键全都空白

    $('.key').addClass('noneKey');
}

function pressShift() {
    shiftPressed = true;
    let info = $('#keyInfo').text();
    if (info == '平') {
        for (let i in shiftHiraganaKeyboard) {
            $('#key' + i).text(shiftHiraganaKeyboard[i]);
        }
    } else {
        for (let i in shiftKatakanaKeyboard) {
            $('#key' + i).text(shiftKatakanaKeyboard[i]);
        }
    }
}
function releaseShift() {
    shiftPressed = false;
    let info = $('#keyInfo').text();
    if (info == '平') {
        for (let i in hiraganaKeyboard) {
            $('#key' + i).text(hiraganaKeyboard[i]);
        }
    } else {
        for (let i in katakanaKeyboard) {
            $('#key' + i).text(katakanaKeyboard[i]);
        }
    }
}

function highlight(id) {
    if(waitKeyIds == []) return;
    if (id == 'Shift') {
        // 有两个 Shift
        $('#keyShiftLeft').addClass('highlighted');
        $('#keyShiftRight').addClass('highlighted');
        return;
    }
    $('#key' + id).addClass('highlighted');
}
function unHighlight(id) {
    if(waitKeyIds == []) return;
    // if (id == 'Shift') {
    //     // 有两个 Shift
    //     $('#keyShiftLeft').removeClass('highlighted');
    //     $('#keyShiftRight').removeClass('highlighted');
    // }
    // $('#key' + id).removeClass('highlighted');

    $('.highlighted').removeClass('highlighted');
}

$(() => {
    toNothing(); // 初始化为空
    toHiragana(false); // 放置所有的假名

    $(document).keydown((e) => {
        // console.log(e);
        if (e.which == 16)
            pressShift();
    });
    $(document).keyup((e) => {
        if (e.which == 16)
            releaseShift();
    });
});