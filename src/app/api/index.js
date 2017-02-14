


import * as axios from 'axios';

const CONFIG = {
  baseURL: 'http://localhost:8080/api',
};

const createHTTP = () => axios.create(CONFIG);
const http = createHTTP();

const GET = url => http.get(url);
const POST = (url, data={}) => http.post(url, data);
const DELETE = url => http.delete(url);


export const createUser = data => POST('/user', data).then(res => res.data);
export const loginUser = data => POST('/user/authenticate', data).then(res => res.data);

export const getUser = id => GET(`/user/${id}`).then(res => res.data);








