import slice from './slice.js'

/**
 * 数组分组
 *
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  size = Math.max(size, 0) //size为正
  const length = array == null ? 0 : array.length //数组长度
  if (!length || size < 1) { //处理边界
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size)) //按组数创建新数组

  //按size截取数组
  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk