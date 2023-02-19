

//https://school.programmers.co.kr/learn/courses/30/lessons/77884


function solution(left, right) {
    var result = 0;

    let arr = []
    for(let i = left; i<=right; i++){
        let cnt = 0;
        for(let j =0; j <= i; j++){
            if(!(i % j)){
                cnt++
            }
        }
         if(cnt%2) {
            result += i;
        } else {
            result -= i;
        }
    }
    return result;
}


// 다른 ㅎ사람 풀이
// 정말 미쳤다고 할수 밖에 없는 풀이였다
// Number.isInteger()전달된 값이 정수인지 여부를 결정합니다.
// 제곱근이 정수면 약수의 갯수는 홀수라는 점을 이용하여 만들었다..

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}