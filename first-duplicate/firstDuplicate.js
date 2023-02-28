function firstDuplicate(array) {
    let duplicates = []
    let indexes = []
    array.forEach((element, index) => {
        if (array.slice(index + 1).indexOf(element) != -1){
            duplicates += element
            indexes += array.slice(index + 1).indexOf(element)
        }
    })

    if (duplicates.length == 0) {
        return -1
    }

    return parseInt(duplicates[indexes.indexOf(Math.min(...indexes))])
}
