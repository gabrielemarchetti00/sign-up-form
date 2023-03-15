let btn = document.querySelector('button');
let errorMsg = document.querySelector('.error');

btn.addEventListener('click', () => {
    let pwd = document.querySelector('#password');
    let rpwd = document.querySelector('#conf-pwd');
    if(pwd != rpwd) {
        errorMsg.textContent = 'Password do not match';
    }
});