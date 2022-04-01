
/**
 * file转base64
*/
export const blobToDataURL = (blob, cb) => {
  const reader = new FileReader()
  reader.onload = function (evt) {
    const base64 = evt.target.result
    cb(base64)
  }
  reader.readAsDataURL(blob)
}
export const base64ToBlob = base64 => {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
export const Base64ToFile = (Blobdata, filename: string) => {
  const arr = Blobdata.split(',')
  console.log(arr)
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

/** * file 图片文件 * 返回图片的Base64数据 */
export const fileToBase64 = file => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  return new Promise((resolve, reject) => {
    reader.onload = function () {
      // 这里是一个异步，所以获取数据不好获取在实际项目中，就用new Promise解决
      if (this.result) {
        resolve(this.result)
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('err')
      }
    }
  })
}

export const getBase64URL = (image) => {
  return new Promise((reslove, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => reslove(reader.result))
    reader.addEventListener('error', (err) => reject(err))
    reader.readAsDataURL(image)
  })
}
