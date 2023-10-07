import css from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';



export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const filterContacts = findContacts();


return (
    <ul>
       {filterContacts.map(({ id, name, number }) => {
        return ( 
          <li key={id} className={css.contacts__list}>
            <p>
              {name}: {number}
            </p>
            <button type="button" className={css.btn_delet} onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })} 
    </ul>
  );
};