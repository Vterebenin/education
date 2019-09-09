console.log("test")


//  "a2", "a3", "a5", "a6", "a1",
const arrNumb = [
    // 1 эксперт
    [5, 1, 2, 0, 3, 4],
    // 2 эксперт
    [4, 3, 5, 1, 2, 0],
    // 3 эксперт
    [0, 1, 5, 3, 4, 2],
    // 4 эксперт
    [5, 3, 4, 1, 0, 2],
    // 5 эксперт
    [4, 1, 0, 5, 2, 3],
]

console.log(arrNumb, "изначальный массив")
// ********************************
// подсчет рангов по методу средних арифметических
// ********************************

function sredOfCol(colNumber) {
    let sum = 0
    let sred = 0
    for (let i = 0; i < arrNumb.length; i++) {
        const insideArr = arrNumb[i];
        for (let j = 0; j < insideArr.length; j++) {
            const element1 = insideArr[j];
            if (j === colNumber - 1) {
                sum += element1
            }
        }

    }
    return sred = sum / 5

}

const sredArr = [
    sredOfCol(1),
    sredOfCol(2),
    sredOfCol(3),
    sredOfCol(4),
    sredOfCol(5),
]
const sredArrTemp = [
    sredOfCol(1),
    sredOfCol(2),
    sredOfCol(3),
    sredOfCol(4),
    sredOfCol(5),
]

const rangTable = {}
sredArrTemp.sort(function (a, b) {
    return a - b;
});

// ********************************
// подсчет рангов по методу медиан
// ********************************

function findCol(colNumber) {
    let colArr = []
    for (let i = 0; i < arrNumb.length; i++) {
        const insideArr = arrNumb[i];
        for (let j = 0; j < insideArr.length; j++) {
            const element1 = insideArr[j];
            if (j === colNumber - 1) {
                colArr.push(element1)
            }
        }
        
    }
    return colArr
    
}

function calcMedian(ar1) {
    var half = Math.floor(ar1.length / 2);
    
    ar1.sort(function (a, b) { return a - b; });
    
    if (ar1.length % 2) {
        return ar1[half];
    } else {
        return (ar1[half - 1] + ar1[half]) / 2.0;
    }
}


const medianArr = []
const medianArrTemp = []
for (let i = 1; i < arrNumb.length+1; i++) {
    arrForMedian = findCol(i)
    mediana = calcMedian(arrForMedian)
    medianArr.push(mediana)
    medianArrTemp.push(mediana)
}
medianArrTemp.sort(function (a, b) { return a - b; });

console.log(medianArr, "медианы")
console.log(medianArrTemp, "отсортированный")

// ********************************
//  подсчет рангов по методу кемени
// ********************************
const mainArr = [
    ["a2", "a3", "a5", "a6", "a1"],
    ["a4", "a5", "a2", "a1", "a3"],
    ["a2", "a6", "a4", "a5", "a3"],
    ["a4", "a6", "a2", "a3", "a1"],
    ["a2", "a5", "a6", "a1", "a4"],
]
const mainArrKemeny = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
]
// если текущий индекс меньше чем следующий
mainArr.forEach(element => {
    element
});
// ********************************
// вывод результатов
// ********************************
for (let i = 0; i < sredArr.length; i++) {
    const srednee = sredArr[i];
    const rangsred = sredArrTemp.indexOf(srednee) + 1
    const mediana = medianArr[i]
    const rangmed = medianArrTemp.indexOf(mediana) + 1
    rangTable[i + 1] = {
        srednee,
        rangsred,
        mediana,
        rangmed,
    }
}

console.log(sredArr, "изначальный массив средних")
console.log(sredArrTemp, "отсортированный массив средних")
console.log(rangTable, "отсортированный")