/*
    Quick Sort

    summary of text in A Common-Sense Guide to Data Structures and Algorithms by Jay Wengrow

    1. Partition Array
    2. Recursively partition sub-arrays (left and right)
    3. The base case is when subarray length is 0 or 1 -- no action

*/

function quickSortArray(arr) {

    const swapInArr = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

    function partition(leftIndex, rightIndex) {
        let pivotIndex = rightIndex
        let pivot = arr[pivotIndex]

        rightIndex -= 1

        while (true) {
            while ( arr[leftIndex] < pivot) {
                leftIndex += 1
            }
            while ( arr[rightIndex] >= pivot) {
                rightIndex -= 1
            }
            if (leftIndex >= rightIndex) {
                break
            } else {
              swapInArr(arr, leftIndex, rightIndex)
            }
        }

        swapInArr(arr,leftIndex, pivotIndex)
        return leftIndex
    }

    function quickSort(leftIndex, rightIndex) {
        if (rightIndex - leftIndex <= 0) {
            return
        }
        let pivotIndex = partition(leftIndex, rightIndex)

        quickSort(leftIndex, pivotIndex - 1)
        quickSort(pivotIndex + 1, rightIndex)
    }

    quickSort(0, arr.length - 1)
    return arr

}


module.exports = quickSortArray;
