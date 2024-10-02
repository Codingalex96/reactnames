import { useState } from 'react';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      {selectedContact ? (
        <div>
          <h2>Selected Contact Details</h2>
          <p><strong>Name:</strong> {selectedContact.name}</p>
          <p><strong>Email:</strong> {selectedContact.email}</p>
          <p><strong>Phone:</strong> {selectedContact.phone}</p>
          
          <button onClick={() => setSelectedContact(null)}>Back to Contact List</button>
        </div>
      ) : (
        <ContactList setSelectedContact={setSelectedContact} />
      )}
    </>
  );
}

export default App;
