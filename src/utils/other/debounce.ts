
type callback = () => void;
export function debounce(fn: callback, delay = 1000) {
  let timer = null
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const arg = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, arg)
    }, delay)
  }
}
