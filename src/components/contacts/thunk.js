import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContacts,
  deleteContacts,
  getContacts,
} from 'services/contactApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await getContacts();
  }
);

export const createContactsThunk = createAsyncThunk(
  'contacts/addContact',
  data => createContacts(data)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContacts(id);
  }
);
