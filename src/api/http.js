const stream = weex.requireModule('stream')
import { API } from './constant.js'
import { uuid, randomNum } from './util.js'
import md5 from 'md5'
import qs from 'qs'

export function fetch (path,all) {
  const random = randomNum()
  const time = new Date().getTime()
  if(platform==='android'){
      return new Promise((resolve, reject) => {
          stream.fetch({
            method: 'GET',
            url: `${API}${path}`,
            type: 'json',
            headers: {
              validateRandomNumber: random,
              validateTimestamp: time,
              cookie: all.cookie,
              validateToken: all.token,
              validateValue: md5((md5((random + time).toString()) + all.key))
            },
          }, (response) => {
            if (response.status == 200) {
              resolve(response.data)
            }
            else {
              reject(response)
            }
          }, () => {})
        })
  }else if(platform==='iOS'){

  }else{
    return new Promise((resolve, reject) => {
        stream.fetch({
          method: 'GET',
          url: `${API}${path}`,
          type: 'json',
        }, (response) => {
          if (response.status == 200) {
            resolve(response.data)
          }
          else {
            reject(response)
          }
        }, () => {})
      })
  }
 }

export function getList (data,info) {
  return fetch('statistics/rider/personal?kOpenId='+data.kOpenId+'&startTime='+data.startTime+'&endTime='+data.endTime,info)
}
