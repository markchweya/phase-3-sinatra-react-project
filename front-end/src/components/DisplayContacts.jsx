import React from 'react'

const DisplayContacts = ({contact, deleteContact, handleUpdateContact}) => {
  return (
    <tr>
        <td>{contact.id? contact.id: "NULL"}</td>
        <td>{contact.category_id? contact.category_id: "NULL"}</td>
        <td>{contact.created_at? contact.created_at: "NULL"}</td>
        <td>{contact.email? contact.email: "NULL"}</td>
        <td>{contact.first_name? contact.first_name: "NULL"}</td>
        <td>{contact.phone? contact.phone: "NULL"}</td>
        <td>{contact.updated_at? contact.updated_at: "NULL"}</td>
        <button onClick={()=> handleUpdateContact(contact.id)}>Update</button>
        <button onClick={()=> deleteContact(contact.id)}>Delete</button>
    </tr>
  )
}

export default DisplayContacts