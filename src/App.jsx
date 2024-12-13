import Container from './components/Container/Container.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/selectors.js';
import NoContactsMsg from './components/NoContactsMsg/NoContactsMsg.jsx';

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? <SearchBox /> : <NoContactsMsg />}
      <ContactList />
    </Container>
  );
}

export default App;
