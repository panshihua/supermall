import {request} from "./request";


export function requestMulti() {
  return request({
    url: '/home/multidata'
  })
}
