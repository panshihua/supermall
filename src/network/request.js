import Axios from 'axios'

export function request(config) {
  const instance = Axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  instance.interceptors.request.use(res => {
    console.log(res);
    return res
  });

  instance.interceptors.response.use(res =>{
    //console.log(res);
    return res.data
  });

  return instance(config)
}
