function search(nameList, searchTerm) {
    var result = nameList.join(" ").match(new RegExp(`\\b\\w*(${searchTerm})\\w*\\b`, "gi"))
    if (result == null){return []}
    else{return [...result]}
}