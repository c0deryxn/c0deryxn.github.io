let fruit = prompt("무슨 과일을 사고 싶나요?");

switch (fruit) {
    case "사과":
        alert('100원입니다.');
        break;
    case "바나나":
        alert("200원입니다.");
        break;
    case "키위":
        alert("300원입니다.");
        break;
    case "멜론":
        alert("500원입니다.");
        break;
    case "수박":
        alert("500원입니다.");
        break;
    default:
        alert("그런 과일 없어요...");
}