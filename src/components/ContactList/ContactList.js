import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListElement from '../ListElement/ListElement';
import css from './ContactList.module.css';
import { selectContacts, selectFilterContacts } from 'redux/selector';

const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);
  const contacts = useSelector(selectContacts);
  console.log(filterContacts);

  return (
    <ul className={css.contacts}>
      {contacts &&
        contacts.map(({ name, id, phone }) => (
          <li className={css.contacts__item} key={id}>
            <ListElement name={name} number={phone} id={id} />
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
export default ContactList;
