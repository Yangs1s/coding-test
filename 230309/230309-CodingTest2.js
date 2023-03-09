function solution(keymap, targets) {
    var answer = [];
    let click = 0;


    targets.forEach((x) => {
        for (let j = 0; j < x.length; j++) {
            let cnt = Infinity

            keymap.forEach((key) => {
                let idx = key.indexOf(x[j])

                if (idx > -1) {
                    cnt = Math.min(cnt, idx + 1)
                }
            })
            click += cnt
        }
        answer.push(click)
        click = 0;
    })
    answer = answer.map(x => {
        if (x == Infinity) {
            x = -1;
        }
        return x
    })
    return answer;
}

console.log(
    solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])
)
solution([["AA"]], ["B"])
solution(["AGZ", "BSSS"], ["ASA", "BGZ"])