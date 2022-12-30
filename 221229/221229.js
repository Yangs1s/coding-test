//https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
    let answer = 0;
    let array =[]

    for(let i =0; i< t.length; i++){
        array.push(t.slice(i,i+p.length))
    }
    for(let i =0; i<array.length; i++){
    if(array[i].length === p.length){
        Number(array[i]) <= Number(p) ? answer+=1 : 0    
    }
    }
    return answer;
}

solution("13106123512","1314")


//다른 사람 풀이

function otherSolution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
    }
    return count;
}


otherSolution()