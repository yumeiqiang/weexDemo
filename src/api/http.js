const stream = weex.requireModule('stream')
var valueModel = weex.requireModule('weex_module')
import { API } from './constant.js'
import { uuid, randomNum } from './util.js'
import md5 from 'md5'
import qs from 'qs'

export function fetch (path) {
  const random = randomNum()
  const time = new Date().getTime()
  valueModel.getOpenId(function(v){
    return new Promise((resolve, reject) => {
        stream.fetch({
          method: 'GET',
          url: `${API}${path}`,
          type: 'json',
          headers: {
            validateRandomNumber: random,
            validateTimestamp: time,
            Cookie: v.cookie,
            validateToken: v.token,
            validateValue: md5((md5((random + time).toString()) + v.key))
          },
        }, (response) => {
          if (response.status == 200) {
            resolve(response.data)
          }
          else {
            reject(response)
          }
        }, () => {})
      }
    })
 });
}

export function getList (data) {
  return fetch('statistics/rider/personal?kOpenId='+data.kOpenId+'&startTime='+data.startTime+'&endTime='+data.endTime)
}
