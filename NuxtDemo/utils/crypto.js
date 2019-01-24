import md5 from 'js-md5';
let Base64 = require('js-base64').Base64;

export const encode=(str)=>{
  return Base64.encode(str)
}
export const decode=(str)=>{
  return Base64.decode(str)
}

