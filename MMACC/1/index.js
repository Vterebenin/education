console.log("test")

const mainArr = [
    ["a2", "a3", "a5", "a4", "a1"],
    ["a4", "a5", "a2", "a1", "a3"],
    ["a2", "a1", "a4", "a5", "a3"],
    ["a4", "a5", "a2", "a3", "a1"],
    ["a2", "a5", "a3", "a1", "a4"],
]
// "a1" "a2" "a3" "a4" "a5",
const arrNumb = [
    // 1 эксперт
    [5, 1, 2, 4, 3],
    // 2 эксперт
    [4, 3, 5, 1, 2],
    // 3 эксперт
    [2, 1, 5, 3, 4],
    // 4 эксперт
    [5, 3, 4, 1, 2],
    // 5 эксперт
    [4, 1, 3, 5, 2],
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
for (let i = 1; i < arrNumb.length + 1; i++) {
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
const mainArrForKemeny = [
    ["a2", "a3", "a5", "a4", "a1"],
    ["a4", "a5", "a2", "a1", "a3"],
    ["a2", "a1", "a4", "a5", "a3"],
    ["a4", "a5", "a2", "a3", "a1"],
    ["a2", "a5", "a3", "a1", "a4"],
]
// функция для создания парных матриц отношений
function createPairwiseMatrix(rangeArr = ["a2", "a3", "a5", "a4", "a1"]) {
    console.log(rangeArr, "pairwise");

    let pairwiseMatrix = [
        // a1, a2, a3, a4, a5 
        // a1
        [0, 0, 0, 0, 0],
        // a2
        [0, 0, 0, 0, 0],
        // a3
        [0, 0, 0, 0, 0],
        // a4
        [0, 0, 0, 0, 0],
        // a5
        [0, 0, 0, 0, 0],
    ]
    const mapPairWise = pairwiseMatrix.map((range, i) => {
        currentRowA = `a${i+1}`
        return range.map((value, i) => {
            const currentColA = `a${i + 1}`
            // console.log(rangeArr, "list")
            // console.log(currentColA, "col")
            // console.log(currentRowA, "row")
            const indexOfCurrentCol = rangeArr.indexOf(currentColA)
            const indexOfCurrentRow = rangeArr.indexOf(currentRowA)
            // console.log(indexOfCurrentCol, "index of col");
            // console.log(indexOfCurrentRow, "index of row");
            const srav = +(indexOfCurrentRow >= indexOfCurrentCol) 

            // console.log("_________________________________________")
            return srav
        });
    });
    console.log(mapPairWise);
    return mapPairWise
}
mainArrForKemeny.forEach(range => {
   createPairwiseMatrix(range) 
});
// createPairwiseMatrix()

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