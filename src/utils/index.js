import axios from 'axios'
export function getData() {
  console.log('11111');
  const url = '/mock/api/v3/login/verificationcode/';
  const response = axios.get(url)
  return response

}