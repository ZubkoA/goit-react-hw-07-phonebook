export const selectContacts = state => {
  return state.contacts.contacts;
};

export const selectFilterContacts = state => {
  const filter = state.filter.filter.toLowerCase();
  const contacts = state.contacts.contacts;

  return [...contacts].filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
