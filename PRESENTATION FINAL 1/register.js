function testField(field){
    if(field == null || field.trim().length <= 0){
        return false;
    } else {
        return true;
    }
}

function testLength(field){
    if(field.length < 8){
        return false;
    } else {
        return true;
    }
}

function testEmail(field){
    let Mail = /^[^@]+@\w+(\.\w+)+\w$/;
    if(!Mail.test(field)){
        return false;
    } else {
        return true;
    }
}

function testFuction(testAll){
    let name_1 = document.getElementById('input-field').value.trim();
    let email_1 = document.getElementById('input-field-1').value;
    let phone = document.getElementById('input-field-2').value;
    let password_1 = document.getElementById('input-field-3').value;
    let confirm_password_1 = document.getElementById('input-field-4').value;
    if(
        !testAll(name_1) ||
        !testAll(email_1) ||
        !testAll(phone) ||
        !testAll(confirm_1)||
        !testAll(confirm_password_1) 
    ){
        alert('Một trong số biến hoặc dữ liệu bị trống!');
    } else if (!testLength(name_1) || !testLength(password_1)){
        alert('Tên hoặc mật khẩu cần độ dài 8 kí tự trở lên!');
    } else if (!testEmail(email_1)){
        alert('Lỗi định dạng email!');
    } else {
        alert('ĐĂNG KÝ THÀNH CÔNG!');
    }
}
