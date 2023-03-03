// https://school.programmers.co.kr/learn/courses/30/lessons/161990
function solution(wallpaper) {

    let luy = 0;
    let lux = 0;
    let rdx = 0
    let rdy = 0

    let first_contact = true;
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                if (first_contact) {
                    lux = i
                    luy = j
                    rdx = i + 1
                    rdy = j + 1
                    first_contact = false
                }
                else {
                    lux = lux > i ? i : lux;
                    luy = luy > j ? j : luy;
                    rdx = rdx < i + 1 ? i + 1 : rdx;
                    rdy = rdy < j + 1 ? j + 1 : rdy;
                }
            }

        }
    }
    return [lux, luy, rdx, rdy];
}
const input = [".#...", "..#..", "...#."]

solution(input)