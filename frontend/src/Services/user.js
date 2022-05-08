/**
 * Get user infos
 * @function getUser
 * @param { array } user response data from axios resquest
 * @returns { array } all values from user
 */

export const getUser = (user) => {
    let userId = user.data.data.id
    let firstname = user.data.data.userInfos.firstName
    let score = user.data.data.score
    let todayScore = user.data.data.todayScore
    let userInfos = user.data.data.keyData
        return {userId, firstname, score, todayScore, userInfos}
}

/**
 * Get datakey of the user
 * @function getKeyDatas
 * @param { array } user response data from axios request
 * @returns { object } object with every data key (calorieCount, proteinCount...)
 */

export const getKeyDatas = (user) => {
    let keyData = user.data.data.keyData
        return keyData
}

/**
 * Get the user sessions
 * @function getSession
 * @param { array } user response data from axios request
 * @returns { array } array with every user session object
 */

export const getSession = (user) => {
    let session = user.data.data.sessions
        return session
}

/**
 * Get the user performance
 * @function getPerformance
 * @param {array} user response data from axios request
 * @returns {array} array with every user performance object
 */

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