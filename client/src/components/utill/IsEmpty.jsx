export const isNotEmpty = (str) =>{
    if(str && str.trim && str.strim.length > 0){
        return true
    }
    return false
}

export const isEmpty = (str) =>{
    return !isEmpty(str)
}