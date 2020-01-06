/**
 * 千分位
 *
 * @export
 * @param {string | number} num
 * @returns {string}
 */

export function formatCash (num?: number | string): string {
  num = num || 0
  const strs = String(num).split(".")
  if (strs.length>1){
	  return strs[0].replace(/(?!^)(?=(\d{3})+$)/g, ',')+"."+strs[1]
  }
  return strs[0].replace(/(?!^)(?=(\d{3})+$)/g, ',')
}

/**
 * 从url获取参数
 *
 * @export
 * @param {string} name
 * @returns {string}
 */
export function queryURL(name: string): string {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const result = window.location.search.substr(1).match(reg)
  if (result !== null) {
      return decodeURI(result[2])
  }
  return ''
}

/**
 * 数据处理
 *
 * @export
 * @param {string} name
 * @returns {string}
 */

 export function formatNumber (num: number | string = 0): number {
   // eslint-disable-next-line no-useless-escape
    const r = /(d)*(\d{18})$/
    const baseLen = 18
    num = String(num)
    const len = num.length
    if (len < baseLen) {
      for (let i = 0; i < baseLen - len; i++) {
        num = '0' + num
      }
    }
  return parseFloat(num.replace(r, '$1.$2'))
 }