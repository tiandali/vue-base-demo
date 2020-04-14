import axios from 'axios'
export function getLoginData() {
  console.log('login');
  const url = '/mock/api/v3/login';
  const response = axios.post(url, { name: 'dali', password: '123456' })
  return response

}