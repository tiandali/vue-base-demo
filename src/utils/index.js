import axios from 'axios'
export function getData() {
  const url = '/mock/api/v3/login/verificationcode/';
  const response = axios.get(url)
  return response

}