/**
 * 千分位
 *
 * @export
 * @param {string | number} num
 * @returns {string}
 */

export function formatCash (num?: number | string): string {
  num = num || 0
  return String(num).replace(/(?!^)(?=(\d{3})+$)/g, ',')
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