import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { addFilter } from '../redux/filterSlice';
import { addContact } from 'redux/contactsSlice';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const isDuplicate = ({ name }) => {
    const result = contacts?.find(
      contactItem => contactItem.name.toLowerCase() === name.toLowerCase()
    );
    return result;
  };

  const addContactToStore = contactObject => {
    if (isDuplicate(contactObject)) {
      return alert(`${contactObject.name} is alredy in contacts`);
    }

    return dispatch(addContact(contactObject));
  };

  const handlerFilterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  const filtredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactToStore} />

      <h2>Contacts</h2>
      <Filter value={filterValue} onChange={handlerFilterChange} />
      <ContactList contacts={filtredContacts} />
    </div>
  );
};
