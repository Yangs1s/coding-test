
const solution = (s) =>
    [...s].map((char, i) => {
        const count = s.slice(0, i).lastIndexOf(char);
        console.log(i)
        console.log(s.slice(0, i))
        return count < 0 ? count : i - count;
    });

console.log(solution("dragonball"))