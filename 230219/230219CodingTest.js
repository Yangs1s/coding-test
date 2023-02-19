function solution(age) {
    var answer = '';
    age = age.toString()
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

    for (let i = 0; i < age.length; i++) {
        answer += alphabet[age[i]]
    }
    return answer;
}

solution(23)