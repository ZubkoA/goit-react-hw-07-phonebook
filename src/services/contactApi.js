import axios from 'axios';

const BASE_URL = 'https://6486d0e5beba6297278f381f.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios(`${BASE_URL}/list`);
  return data;
};
export const deleteContacts = async id => {
  const { data } = await axios(`${BASE_URL}/list/${id}`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await axios.post(`${BASE_URL}/list`, contact);
  return data;
};
