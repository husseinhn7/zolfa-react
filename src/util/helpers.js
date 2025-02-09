export const getColor = (index, markedArr, answeredArr) =>{
    if (markedArr.includes(index) && answeredArr.includes(index) ){
        return "border-blue-500"
    }
    else if (!markedArr.includes(index) && answeredArr.includes(index) ){
        return "border-green-500"
    }
    else if (markedArr.includes(index) && !answeredArr.includes(index) ){
        return "border-orange-500"
    }
    else {
        return "border-gray-500"
    }
}