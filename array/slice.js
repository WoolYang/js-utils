/**
 * 数组slice pollyfill
 *
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * slice(array, 2)
 * // => [3, 4]
 */
//平均性能略慢于native
function slice(array, start, end) {
    let length = array == null ? 0 : array.length
    if (!length) { //不存在时返回空
      return []
    }
    start = start == null ? 0 : start
    end = end === undefined ? length : end
  
    if (start < 0) {
      start = -start > length ? 0 : (length + start)
    }
    end = end > length ? length : end
    if (end < 0) {
      end += length
    }
    //避免数组索引超出界限
    length = start > end ? 0 : ((end - start) >>> 0)
    start >>>= 0
  
    let index = -1
    const result = new Array(length)
    while (++index < length) {
      result[index] = array[index + start]
    }
    return result
  }
  
  export default slice