import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from '../components/contacts/slice';
import { filterReducer } from './filter/filterReducer';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
