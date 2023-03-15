let errorMsg = document.querySelector('.error');
let pwd = document.querySelector('#password');
let rpwd = document.querySelector('#conf-pwd');
if(pwd.textContent == '' && rpwd.textContent == '') {
    errorMsg.textContent = 'Password do not match';
}

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    pwd = document.querySelector('#password');
    rpwd = document.querySelector('#conf-pwd');
    if(pwd != rpwd) {
        errorMsg.textContent = 'Password do not match';
    }
});