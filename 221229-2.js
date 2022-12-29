function solution(N, stages) {
    var answer = [];
    let peoples = stages.length;
    
    for(let i=1; i<=N; i++){
        let stage = stages.filter(ele => ele === i).length
        let fail = 0;
        if(stage ===0){
            fail = 0;
        }else{
            fail = (stage)/peoples
        }
        peoples -= stage
        
        answer.push({idx:i,failRate:fail})
    }
    
    answer.sort((a,b) =>{
        if(a.failRate > b.failRate){
            return -1;
        }else if (a.failRate < b.failRate){
            return 1;
        }
        else{
            if(a.idx > b.idx){
                return 1;
            }else{
                return -1
            }
            
        }
    })
    return answer.map(ele => ele.idx);
}

//스테이지의 갯수 : N



solution()



function otherSolution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

otherSolution()
