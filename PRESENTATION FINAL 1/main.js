function checkField(field){
    if(field == null || field.trim().length <= 0){
        return false;
    } else {
        return true;
    }
}

function checkLength(field){
    if (field.length < 8) {
        return false;
    } else {
        return true;
    }
}

function checkMail(field){
    let expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if(expression.test(field) == false){
        return false;
    } else {
        return true;
    }
}

function checkRegister() {
    let name_input = document.getElementById('name').value;
    let email_input = document.getElementById('email').value;
    let phone_input = document.getElementById('phone').value;
    let password_input = document.getElementById('password').value;
    let cf_pw_input = document.getElementById('confirm-pw').value;

    if (
        !checkField(name_input) ||
        !checkField(email_input) ||
        !checkField(phone_input) ||
        !checkField(password_input) ||
        !checkField(cf_pw_input)
    ) {
        alert('Một trong số biến hoặc dữ liệu bị trống!');
    } else if (!checkLength(name_input) || !checkLength(password_input)) {
        alert('Tên hoặc mật khẩu cần có độ dài 8 kí tự trở lên!');
    } else if (!checkMail(email_input)) {
        alert('Lỗi định dạng email!');
    } else {
        alert('ĐĂNG KÝ THÀNH CÔNG!');
    }
}



const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
sideLinks.forEach(item =>{
    const li = item.parentElement
    item.addEventListener('click', () =>{
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});



const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo-name');
menuBar.addEventListener('click', () =>{
    sideBar.classList.toggle('close');
    logo.classList.toggle('hide');
});



const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', function(){
    if(this.checked){
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');
    }
});









