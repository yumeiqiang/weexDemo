const stream = weex.requireModule('stream')
import { API } from './constant.js'

export function fetch (path) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: `${API}${path}`,
      type: 'json'
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

export function getList (data) {
  return fetch('statistics/rider/personal?kOpenId='+data.kOpenId+'&startTime='+data.startTime+'&endTime='+data.endTime)
}
