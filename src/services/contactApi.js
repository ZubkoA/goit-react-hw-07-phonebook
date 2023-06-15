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

// export const getContacts = async () => {
//    const data = await fetch(`${BASE_URL}/list`);
//   return await data.json();
// };
export const createContacts = async data => {
  const res = await fetch(`${BASE_URL}/list`, {
    body: JSON.stringify(data),
  });
  return await res.json();
};
// export const deleteContacts = async id => {
//   const res = await fetch(`${BASE_URL}/list/${id}`);
//   return await res.json();
// };
