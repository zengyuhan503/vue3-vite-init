/*
 * 验证手机号是否合格
 * true--说明合格
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isPhone(phoneStr: string) {
  const myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/
  if (!myreg.test(phoneStr)) {
    return false
  } else {
    return true
  }
}

/*
 * 验证邮箱是否合格
 * true--说明合格
 */
export function isEmail(emailStr: string) {
  const myreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!myreg.test(emailStr)) {
    return false
  } else {
    return true
  }
}
/*
 * 验证密码是否合格
 * true--说明合格
 */
export function isPwd(pwdStr: string) {
  const myreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,12}$/
  if (!myreg.test(pwdStr)) {
    return false
  } else {
    return true
  }
}

/*
 * 验证密码是否合格
 * true--说明合格
 */
export function isIDCard(codeStr: string) {
  const myreg = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/
  if (!myreg.test(codeStr)) {
    return false
  } else {
    return true
  }
}

/*
 * 验证字符串是否为空（也不能为纯空格）
 * true--说明为空， false--说明不为空
 */
export function isEmptyString(string: string) {
  if (
    string === undefined ||
    typeof string === 'undefined' ||
    !string ||
    string == null ||
    string === '' ||
    /^\s+$/gi.test(string)
  ) {
    return true
  } else {
    return false
  }
}

/*
 * 验证银行卡是否为空（也不能为纯空格）
 * true--说明为空， false--说明不为空
 */
export function isBank(bank: string) {
  console.log(bank)
  if (
    bank === undefined ||
    typeof bank === 'undefined' ||
    !bank ||
    bank == null ||
    bank === '' ||
    /^\s+$/gi.test(bank)
  ) {
    return false
  } else {
    const myreg = /^[1-9]\d{9,29}$/
    if (!myreg.test(bank)) {
      return false
    } else {
      return true
    }
  }
}


/**
 * 去除参数空数据（用于向后台传递参数的时候）
 * @param {Object} obj [参数对象]
 */
 export function filterEmptyData(obj = {}) {
  for (const prop in obj) {
    obj[prop] === '' ? delete obj[prop] : obj[prop]
  }
  return obj
}
