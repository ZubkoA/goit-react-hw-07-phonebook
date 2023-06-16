import axios from 'axios';

const BASE_URL = 'https://6486d0e5beba6297278f381f.mockapi.io';
export const addContacts = async contact => {
  const { data } = await axios(`${BASE_URL}/list`, contact);
  return data;
};
const addContactsThunk = createAsyncThunk('contacts/addContact', async data => {
  return await addContacts(data);
});

const handleFulfilledAdd = (state, { payload }) => {
  state.contacts.push(payload);
};

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [addContactsThunk];
const createStatus = type => isAnyOf(...arrThunks.map(el => el[type]));
const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder

      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addMatcher(createStatus(PENDING), handlePending)
      .addMatcher(createStatus(REJECTED), handleRejected)
      .addMatcher(createStatus(FULFILLED), handleFulfilled);
  },
});

export const contactReducer = contactsSlice.reducer;
