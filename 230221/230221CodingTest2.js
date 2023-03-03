function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    let cards1Max = cards1.length;
    let cards2Max = cards2.length;
    for (let i = 0; i < goal.length; i++) {
        let word = goal[i]
        console.log(word)
        if (idx1 < cards1Max && word === cards1[idx1]) {
            idx1++;
        }
        else if (idx2 < cards2Max && word === cards2[idx2]
        ) {
            idx2++;
        }
        else {
            return 'No'
        }
    }
    return 'Yes';
}


console.log(solution(['i']))