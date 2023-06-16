import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListElement from '../ListElement/ListElement';
import css from './ContactList.module.css';
import { selectFilterContacts } from 'redux/selector';

const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <ul className={css.contacts}>
      {filterContacts &&
        filterContacts.map(({ name, id, phone }) => (
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
