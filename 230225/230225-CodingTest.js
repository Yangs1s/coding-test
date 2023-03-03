function solution(n, lost, reserve) {
    var answer = n - lost.length;
    let reallost = lost.filter((l) => !reserve.includes(l))
    let realreserve = reserve.filter((l) => !lost.includes(l))

    answer += lost.length - reallost.length

    reallost.sort((a, b) => a - b)
    reallost.forEach((i) => {
        if (realreserve.length === 0) {
            return;
        }

        if (realreserve.includes(i - 1)) {
            realreserve = realreserve.filter((r) => r !== i - 1)
            answer++

        }
        else if (realreserve.includes(i + 1)) {
            realreserve = realreserve.filter((r) => r !== i + 1)
            answer++
        }
    })
    return answer;
}
const n = 5
const lost = [2, 4]
const reserve = [3]
let s = solution(n, lost, reserve)

console.log(s)