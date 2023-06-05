import './App.css';
import { useEffect, useState } from 'react';
import DisplayContacts from './components/DisplayContacts';
import AddContact from './components/AddContact';
import Search from './components/Search';
function App() {
  const [contacts, setContact] = useState([])
  const [addForm, setAddFrom] = useState(false)
  const [updateContact, setUpdateContact] = useState({});

  const getContacts = ()=>{
    fetch('/contacts')
    .then(res => res.json())
    .then(res => {
      setContact(res);
    })
  }

  useEffect(()=>{
    getContacts();
  }, [])


  const handleAddBtn = ()=>{
    addForm? setAddFrom(false): setAddFrom(true)
  }

  const deleteContact = (id)=>{
    fetch(`/contacts/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      getContacts();
    })
  }

  const handleUpdateContact = (id) => {
    contacts.forEach((contact)=>{
      if(contact.id === id){
        setUpdateContact(contact);
        setAddFrom(true);
      }
    })
  }

  return (
    <section>
      <Search getContacts={getContacts} contact={contacts}/>
      <button onClick={handleAddBtn}>Add Contact</button>
      <AddContact addForm={addForm} getContacts={getContacts} setContact={setContact} updateContact={updateContact} setUpdateContact={setUpdateContact}/>
      <table>
        <tbody>
        <tr>
          <th>id</th>
          <th>Category id</th>
          <th>Created at</th>
          <th>email</th>
          <th>first_name</th>
          <th>phone</th>
          <th>Updated At</th>
        </tr>
      {contacts.map((contact)=>{
        return <DisplayContacts key={contact.id} contact={contact}  deleteContact={deleteContact} handleUpdateContact={handleUpdateContact}/>
      })}
      </tbody>
      </table>
    </section>
  );
}

export default App;