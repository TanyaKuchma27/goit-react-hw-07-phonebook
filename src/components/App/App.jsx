import { useState } from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/contactsSlice';

export const App = () => { 
  const { data: contacts } = useFetchContactsQuery(); 
  const [filter, setFilter] = useState('');

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter))
    };

    return;    
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }; 

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>        
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter}/>
      <ContactList contacts={ visibleContacts }/>
      <Toaster position="top-center" />
    </Container>
  );
}