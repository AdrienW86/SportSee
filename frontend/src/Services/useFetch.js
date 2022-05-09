import axios from "axios";
import { useEffect, useState } from "react";

import { getUser, getSession, getKeyDatas, getPerformance } from './user';
import { userInfos, userActivity, userSessions, userPerformance } from '../mocked-data';
import { mockedGetUser, mockedGetSession, mockedGetKeyDatas, mockedPerformance } from './mocked-user';

let user
let infos
let performance
let session
let sessionActivity
let url = 'http://localhost:3000/user/'

/**
 * Custom Hook for api request
 * @type {function}
 * @param { string } url url from the request
 * @param { function } pathFunction function for update the response in the expected format
 * @returns { array } array with the response data in the format expected
 */

function UseFetch(url, pathFunction) {
  const [data, setData] = useState([]);
    useEffect(() => {
      // eslint-disable-next-line
    axios.get(url)
      .then(response => {
        const path = pathFunction(response)   
    setData(path);     
  })  .catch(err => {
      console.log(err)
  })
 }, [url, pathFunction]);
return data
}

/**
 * getAllDatas
 * @type {function}
 * @param {number} id user id
 * @returns {array} all data from the user loader by the api
 */

export function getAllDatas(id) {
  user =  UseFetch(`${url}${id}`, getUser)
  infos = UseFetch(`${url}${id}`,getKeyDatas )
  performance = UseFetch(`${url}${id}/performance`,getPerformance)
  session = UseFetch (`${url}${id}/average-sessions`,getSession)
  sessionActivity = UseFetch(`${url}${id}/activity`,getSession)
  
  // Frontend url
  let currentUrl = `http://localhost:3001/user/${id}`
  let currentUrlMocked = `http://localhost:3001/user-mocked/${id}`

  return {user, infos, performance, session, sessionActivity, currentUrl, currentUrlMocked}
}

// If api data is not loaded, mocked data is loaded

  /**getMockedDatas
   * @type {function}
   * @param {number} id user id
   * @returns {array} all data mocked from the user
   */

 export function getMockedDatas(id) {
  // Frontend url
  let currentUrl = `http://localhost:3001/user/${id}`
  let currentUrlMocked = `http://localhost:3001/user-mocked/${id}`

  if(user === undefined) {
    user = mockedGetUser(userInfos, id)
  }
  if(session === undefined) {
    session = mockedGetSession(userSessions, id)
  }
  if(sessionActivity === undefined) {
    sessionActivity= mockedGetSession(userActivity, id)
  }
  if(infos === undefined) {
    infos = mockedGetKeyDatas(userInfos, id)
  }
   if(performance === undefined) {
     performance = mockedPerformance(userPerformance, id)
   }
  return {user, infos, performance, session, sessionActivity, currentUrl, currentUrlMocked}
}  