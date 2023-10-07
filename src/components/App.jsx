import {ContactsForm} from './ContactsForm/ContactsForm';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export const App = () => {

    return (
      <div
        style={{
          textAlign:'center',
          fontSize: '16px',
          color: '#010101'
          
        }}
      >
         <h1>Phonebook</h1>
         <ContactsForm />
        <h2>Contacts</h2>
        <Filter  />
        <ContactList 
  
        /> 
    
      </div>
    );
  }
 


