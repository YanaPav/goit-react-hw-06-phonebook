import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { addFilter } from '../redux/filterSlice';
import { addContact } from 'redux/contactsSlice';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  // const [contacts, setContacts] = useState(() => {
  //   const localStorageContacts = localStorage.getItem(CONTACTS_KEY);
  //   return JSON.parse(localStorageContacts) || [];
  // });
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    return localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const isDuplicate = ({ name }) => {
    const result = contacts.find(
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

  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactToStore} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handlerFilterChange} />
      <ContactList contacts={filtredContacts} />
    </div>
  );
};
