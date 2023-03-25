import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from 'redux/store';

import { Container } from './App.styled';

const App = () => {

  return (
    <PersistGate loading={null} persistor={persistor}>
        <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
      </PersistGate>
    
  );
};

export default App;