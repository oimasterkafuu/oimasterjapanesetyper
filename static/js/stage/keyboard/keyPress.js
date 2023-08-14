// 获取每个按下的键的数值，并对应到键盘
// 写这个的时候，我及其痛苦 * 7，这里记录一下心情

const num2key = {
    '8': 'Backspace',
    '9': 'Tab',
    '13': 'Enter',
    '16': 'Shift',
    '20': 'Capslock',
    '32': 'Space',
    '48': 'Wa',
    '49': 'Nu',
    '50': 'Fu',
    '51': 'A',
    '52': 'U',
    '53': 'E',
    '54': 'O',
    '55': 'Ya',
    '56': 'Yu',
    '57': 'Yo',
    '65': 'Chi',
    '66': 'Ko',
    '67': 'So',
    '68': 'Shi',
    '69': 'I',
    '70': 'Ha',
    '71': 'Ki',
    '72': 'Ku',
    '73': 'Ni',
    '74': 'Ma',
    '75': 'No',
    '76': 'Ri',
    '77': 'Mo',
    '78': 'Mi',
    '79': 'Ra',
    '80': 'Se',
    '81': 'Ta',
    '82': 'Su',
    '83': 'To',
    '84': 'Ka',
    '85': 'Na',
    '86': 'Hi',
    '87': 'Te',
    '88': 'Sa',
    '89': 'N',
    '90': 'Tsu',
    '186': 'Re',
    '187': 'P',
    '188': 'Ne',
    '189': 'Ho',
    '190': 'Ru',
    '191': 'Me',
    '192': 'Info',
    '219': 'G',
    '220': 'He',
    '221': 'Mu',
    '222': 'Ke'
}

$(() => {
    $(document).keydown((e) => {
        if(waitKeyIds.length == 0) return;
        highlight(num2key[e.which]);
    });
    $(document).keyup((e) => {
        unHighlight(num2key[e.which]);
    });
});