// 이진탐색
function Binary(list, target) {
    let low = 0
    let high = list.length - 1;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2)
        if (target < list[middle]) {
            high = middle - 1
        } else if (target > list[middle]) {
            low = middle + 1
        } else { return middle }
    }
    return -1
}

console.log(Binary([1, 5, 6, 7, 10, 15, 16, 20, 30, 55, 99, 100], 10))
console.log(Binary([1, 5, 6, 7, 10, 15, 16, 20, 30, 55, 99, 100], 120))


function selectionSort(list) {

    let min = Math.min(...list)
    let minIdx = list.indexOf(min)

    console.log(minIdx)

    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            list[i] = min
        }
    }
    console.log(list)
}


selectionSort([5, 3, 2, 6, 1, 4])