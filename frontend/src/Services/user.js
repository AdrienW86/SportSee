
export const getUser = (user) => {
    let firstname = user.data.data.userInfos.firstName
    let score = user.data.data.score
    let  userInfos = user.data.data.keyData
        return {firstname, score, userInfos}
}

export const getUserActivity = (user) => {
    let session = user.data.data.sessions
        return session
}

export const getKeyDatas = (user) => {
    let keyData = user.data.data.keyData
        return keyData
}

export const getPerformance = (user) => {
    let performance = user.data.data.data
    let title = user.data.data.kind

    let values = performance.map(el => el.value)
    let titles = Object.values(title)
    let array = []
    let i = 0; 

    do {                                   
        array.push({title: titles[i], value: values[i]})
        i +=1  
    } while (i < titles.length)

        return {array}
}