import axios from 'axios';

axios.defaults.baseURL = 'https://6486d0e5beba6297278f381f.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios.get('/list');
  return data;
};
export const deleteContacts = async id => {
  const { data } = await axios(`/list/${id}`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await axios.post('/list', contact);
  return data;
};
