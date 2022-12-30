function otherSolution(X, Y) {
    const objectX = {};
    const objectY = {};
    
    const ArrX = X.split('');
    const ArrY = Y.split('');
    
    ArrX.forEach((ele) =>{
        objectX[ele] = ++objectX[ele] || 1
    })
    
     ArrY.forEach((ele) =>{
        objectY[ele] = ++objectY[ele] || 1
    })
    let answer = ''
     for(let num in objectX){
        if(objectX[num] && objectY[num]){
            answer += num.repeat(Math.min(objectX[num], objectY[num]))
        }
         console.log(objectX[num])
         console.log(objectY[num])
    }
      if(!answer) return "-1";
    if(answer.split('').every(n => n === '0')) return "0";

    return answer.split('').sort((a, b) => b - a).join('');
}

otherSolution()

// 내 풀이.. 
// 문제점 
// 552 같은 케이스 문제가 안풀림 (6~15번이 하나도 안풀린다.)

// 알고리즘의 기반해서 잘 안풀어서 그런가.. 
// 

    // function solution(X, Y) {
//     const common = [...new Set(X.split(''))].filter((ele) =>{
//         return Y.includes(ele)
//     })
//     if(common.length === 0) return "-1"
    
//     console.log(common)
//     return common
//         .map((num) => +num)
//         .sort((a,b) => b-a)
//         .join('')
// }
