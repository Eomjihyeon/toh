let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};

// 위의 문장을 한줄로 작성하시오.
let circleArea = (pi, r) => pi * r * r;

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"

//익명함수를 애로우펑션으로 바꿀수있다
//한줄일 경우 {} 생략가능
//표현식일 경우에는 return도 생략가능
