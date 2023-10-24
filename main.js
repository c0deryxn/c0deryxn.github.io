// 상수 정의 part
const PASSWORD = "test1234$";

// 함수 정의 part
isVerified = () => {
    var userInput = prompt("비밀번호");
    if (userInput != PASSWORD) {
        alert("비밀번호 불일치");
        isVerified();
    } else {
        alert('인증되었습니다.');
    }
}

alertInputValue = (userId, userPw) => {
    alert(`아이디: ${userId} 비밀번호: ${userPw} 감지되었습니다.`)
}

isVerified();