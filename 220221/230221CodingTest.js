function solution(n) {
    var answer = 0;
    const threeNumber = (n.toString(3).split('').reverse().join(''))
    answer = parseInt(threeNumber, 3)
    return answer;
}

console.log(solution(55)) // 29