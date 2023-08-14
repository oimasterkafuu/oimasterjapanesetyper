$(async () => {
    // 用于初次访问，显示一些信息
    await swal({
        title: '初次见面',
        text: '欢迎您使用 oimaster Japanese typer！',
        timer: 4000,
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: false
    });
    await swal({
        title: '初次见面',
        text: '这里是学习假名输入法的地方。',
        timer: 3000,
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: false
    });
    await swal({
        title: '初次见面',
        text: '请使用键盘完成交互，鼠标已被隐藏。',
        timer: 3000,
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: false
    });
    await swal({
        title: '初次见面',
        text: '最后，希望您能够有所收获！',
        closeOnClickOutside: false,
        closeOnEsc: false,
        button: '始めましょう'
    });
    setTimeout(() => {
        location = '/init/';
    }, 500);
});