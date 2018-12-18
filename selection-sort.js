// selection sort
// summary of text in A Common-Sense Guide to Data Structures and Algorithms by Jay Wengrow

// for each pass, find the lowest value and put it at index 0 of the pass

function selectionSort(arr){
    let lowestIndex
    const swapInArray = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

    for (let i = 0; i < arr.length; i++) {
        lowestIndex = i

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[lowestIndex]) {
                lowestIndex = j
            }
        }

        if (i != lowestIndex) {
            swapInArray(arr,i,lowestIndex)
        }
    }
    return arr
}

//console.log('selectionSort', selectionSort([9,8,7,6,5,4,3,2,1,0,-1,-2]))

module.exports = selectionSort
