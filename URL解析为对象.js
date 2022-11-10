
let url = 'https://www.google.com/search?q=%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF&oq=%E6%B5%8F%E8%A7%88%E5%99%A8&id=2&id=33&id=999&id=1999&a=1&a=22&a=55&aqs=chrome.2.69i57j69i59l2j0i512l7.3986j0j15&sourceid=chrome&ie=UTF-8'
function parseUrl(url) {
  let result = {}

  const arr = url.split('?')[1].split('&')

  for (let i = 0; i < arr.length; i++) {
    let innerArr = arr[i].split('=')
    let key = innerArr[0]
    let value = decodeURI(innerArr[1])
    if (result[key]) {
      result[key] = [].concat(result[key], value)
    } else {
      result[key] = value
    }
  }
  return result
}
console.log(parseUrl(url));
