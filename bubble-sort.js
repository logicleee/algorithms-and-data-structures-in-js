/*
    Bubble Sort

    summary of text in A Common-Sense Guide to Data Structures and Algorithms by Jay Wengrow

    for each pass, push the highest number to the end of the list (highestIndex)
    by comparing and sorting adjacent pairs until there are no swaps.
*/

function bubbleSort(arr){
    let sorted = false
    let highestIndex = arr.length
    const swapInArray = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

    while (sorted === false) {
        sorted = true

        for (let i=0; i < highestIndex; i++) {
            if (arr[i] > arr[i+1]) {
                sorted = false
                swapInArray(arr,i,i+1)
            }
        }
        highestIndex -= 1
    }
    return arr
}

console.log('BubbleSort   ', bubbleSort([9,8,7,6,5,4,3,2,1,0,-1,-2]))
