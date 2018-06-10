import config from '../config';
const BaseUrl = config.BaseUrl;

export default async (type = 'GET', url = '', data = {}, method = 'fetch') => {
  type = type.toUpperCase();
  url = BaseUrl + url;

  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  // if (window.fetch && method == 'fetch') {
  let requestConfig = {
    credentials: 'include',
    method: type,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: "cors",
    // cache: "force-cache"
  }

  if (type == 'POST') {
    Object.defineProperty(requestConfig, 'body', {
      value: JSON.stringify(data)
    })
  }
  const response = fetch(url, requestConfig);
  let res = await Termination(response);
  if (res.status === 200) {
    return await res.json();
  }
  // response.then(res => {})
  // const responseJson = await response.json();
  // return responseJson;
  // } catch (error) {
  //   throw new Error(error)
  // }
  //   } else {
  //     return new Promise((resolve, reject) => {
  //       let requestObj;
  //       if (window.XMLHttpRequest) {
  //         requestObj = new XMLHttpRequest();
  //       } else {
  //         requestObj = new ActiveXObject;
  //       }

  //       let sendData = '';
  //       if (type == 'POST') {
  //         sendData = JSON.stringify(data);
  //       }

  //       requestObj.open(type, url, true);
  //       requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //       requestObj.send(sendData);

  //       requestObj.onreadystatechange = () => {
  //         if (requestObj.readyState == 4) {
  //           if (requestObj.status == 200) {
  //             let obj = requestObj.response
  //             if (typeof obj !== 'object') {
  //               obj = JSON.parse(obj);
  //             }
  //             resolve(obj)
  //           } else {
  //             reject(requestObj)
  //           }
  //         }
  //       }
  //     })
  //   }
}

const Termination = promise => {
  return new Promise((resolve, reject) => {
    promise.then(res => {
      resolve(res);
    });
    promise.catch(err => {
      reject(err);
    })
  });
}
