import axios from "axios";
const baseURL = `http://64.227.142.191:8080/application-test-v1.1/`;

const onSuccess = (response) => {
  return response.data;
};
const onError = (error) => {
  if (error?.response?.data) {
    throw error.response.data;
  }
  throw error;
};
export async function apiRequest({ ...options }) {
  const client = axios.create({ baseURL: baseURL });
  client.defaults.headers.common = {
    "Content-Type": "application/json",
  };
  return client(options).then(onSuccess).catch(onError);
}
