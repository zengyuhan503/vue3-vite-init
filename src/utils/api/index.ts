import apiRequest from '../request/index'

/**
 * @description: API请求接口
 * @generic url API请求地址
 * @generic params  请求参数
 * @generic requestInterceptorsCallback  接口请求拦截callback
 * @generic responseInterceptorsCallback  接口响应拦截callback
 * @param {apiGet} config GET请求
 * @returns {Promise}
 */
export const apiGet = (
  url: string,
  params?: unknown,
  requestInterceptorsCallback?: Function,
  responseInterceptorsCallback?: Function
) => {
  return new Promise((resolve, reject) => {
    let res = apiRequest({
      url: url,
      method: 'GET',
      data: { params: params },
      interceptors: {
        requestInterceptors(res) {
          requestInterceptorsCallback ? requestInterceptorsCallback(res) : ''
          return res
        },
        responseInterceptors(result) {
          responseInterceptorsCallback ? responseInterceptorsCallback(result) : ''
          return result
        }
      }
    })
    resolve(res)
  })
}


/**
 * @description: API请求接口
 * @generic url API请求地址
 * @generic params  请求参数
 * @generic requestInterceptorsCallback  接口请求拦截callback
 * @generic responseInterceptorsCallback  接口响应拦截callback
 * @param {apiPost} RequestConfig Post请求
 * @returns {Promise}
 */
export const apiPost = (
  url: string,
  params?: unknown,
  requestInterceptorsCallback?: Function,
  responseInterceptorsCallback?: Function
) => {
  return new Promise((resolve, reject) => {
    let res = apiRequest({
      url: url,
      method: 'POST',
      data: params,
      interceptors: {
        requestInterceptors(res) {
          requestInterceptorsCallback ? requestInterceptorsCallback(res) : ''
          return res
        },
        responseInterceptors(result) {
          responseInterceptorsCallback ? responseInterceptorsCallback(result) : ''
          return result
        }
      }
    })
    resolve(res)
  })
}



/**
 * @description: API请求接口
 * @generic url API请求地址
 * @generic params  请求参数
 * @generic requestInterceptorsCallback  接口请求拦截callback
 * @generic responseInterceptorsCallback  接口响应拦截callback
 * @param {apiPut} config Put请求
 * @returns {Promise}
 */
export const apiPut = (
  url: string,
  params?: unknown,
  requestInterceptorsCallback?: Function,
  responseInterceptorsCallback?: Function
) => {
  return new Promise((resolve, reject) => {
    let res = apiRequest({
      url: url,
      method: 'PUT',
      data: params,
      interceptors: {
        requestInterceptors(res) {
          requestInterceptorsCallback ? requestInterceptorsCallback(res) : ''
          return res
        },
        responseInterceptors(result) {
          responseInterceptorsCallback ? responseInterceptorsCallback(result) : ''
          return result
        }
      }
    })
    resolve(res)
  })
}


/**
 * @description: API请求接口
 * @generic url API请求地址
 * @generic params  请求参数
 * @generic requestInterceptorsCallback  接口请求拦截callback
 * @generic responseInterceptorsCallback  接口响应拦截callback
 * @param {apiDelete} config Delete请求
 * @returns {Promise}
 */
export const apiDelete = (
  url: string,
  params?: unknown,
  requestInterceptorsCallback?: Function,
  responseInterceptorsCallback?: Function
) => {
  return new Promise((resolve, reject) => {
    let res = apiRequest({
      url: url,
      method: 'DELETE',
      data: params || '',
      interceptors: {
        requestInterceptors(res) {
          requestInterceptorsCallback ? requestInterceptorsCallback(res) : ''
          return res
        },
        responseInterceptors(result) {
          responseInterceptorsCallback ? responseInterceptorsCallback(result) : ''
          return result
        }
      }
    })
    resolve(res)
  })
}
