import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/selectors.js';
import css from './ContactList.module.css';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = filter
    ? getFilteredContacts(contacts, filter)
    : contacts;

  return (
    <ul className={css.contactList}>
      {filteredContacts ? (
        filteredContacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })
      ) : (
        <li>No results found</li>
      )}
    </ul>
  );
};

export default ContactList;
