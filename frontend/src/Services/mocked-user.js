
/**
 * Get user infos
 * @param { object } user data mocked
 * @param { number } id user id
 * @param { string } firstname user firstname
 * @param { number } score user score
 * @param { number } todayScore user score
 * @param { object } keyData user key datas
 * @returns { string } every user datas
 */

export const mockedGetUser = (user, id) => { 
    let firstname
    let score
    let todayScore
    let userInfos
        user.forEach(user =>  {
            if(user.id === id) {    
                firstname = user.userInfos.firstName
                score = user.score
                todayScore = user.todayScore
                userInfos = user.keyData
            }
        })
    return {firstname, score, todayScore, userInfos}
}

/**
 * Get datakey of the user
 * @param { object } user response data from mocked data
 * @param { object } keyData user key datas
 * @returns { object } object with every data key (calorieCount, proteinCount...)
 */

export const mockedGetKeyDatas = (user, id) => {
    let calorieCount
    let proteinCount
    let carbohydrateCount
    let lipidCount
        user.forEach(user => {
            if(user.id === id) {
                calorieCount = user.keyData.calorieCount
                proteinCount = user.keyData.proteinCount
                carbohydrateCount = user.keyData.carbohydrateCount
                lipidCount = user.keyData.lipidCount
        }
    })
    return { calorieCount, proteinCount, carbohydrateCount, lipidCount}
}

/**
 * Get the user sessions
 * @param {object} user response data from mocked data
 * @returns {object}
 */

export const mockedGetSession = (user, id)=> {
    let session
        user.forEach(user => {
            if(user.userId === id) {
                session = user.sessions
            }
        })
        return session
}

/**
 * Get the user performance
 * @param {object} user response data from mocked data
 * @param {*} id id from the user
 * @returns {array}
 */

export const mockedPerformance = (user, id) => {  
    let performance
        user.forEach(el => {
            if(el.userId === id)
                performance = el
        })

    let title = performance.kind
    let values = performance.data.map(el => el.value)
    let titles = Object.values(title)
    let array = []
    let i = 0; 

    do {                                   
        array.push({title: titles[i], value: values[i]})
        i +=1  
    } while (i < titles.length)

        return {array}
}