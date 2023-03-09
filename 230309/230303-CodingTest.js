// [2,5,3]
// 2번째 숫자부터 5번째 숫자까지 자르고 3번째 있는 숫자를고르시오

function solution(array, commands) {
    var answer = [];
    let i = 0;
    let j = 0;
    let k = 0;

    for (let a = 0; a < commands.length; a++) {
        i = commands[a][0]
        j = commands[a][1]
        k = commands[a][2]

        let newArr = array.slice(i - 1, j).sort((x, y) => x - y)
        console.log(newArr)
        answer.push(newArr[k - 1])
    }

    return answer;
}


console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))