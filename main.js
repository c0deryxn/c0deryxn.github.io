const PASSWORD = "test1234$";

isVerified = () => {
    var userInput = prompt("비밀번호");
    if (userInput != PASSWORD) {
        alert("비밀번호 불일치");
        isVerified();
    } else {
        alert('인증되었습니다.');
    }
}

isVerified();