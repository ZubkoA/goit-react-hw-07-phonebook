import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from './contacts/thunk';
import Header from './Header';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AddContacts from './AddContacts/AddContacts';
import css from './App.module.css';

const App = () => {
  const contact = useSelector(state => state.contacts.contacts);
  console.log(contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Header title="Phonebook" />
      {<AddContacts />}
      <Filter />
      <Header titleContacts="Contacts" />
      <ContactList />
    </div>
  );
};

export default App;
