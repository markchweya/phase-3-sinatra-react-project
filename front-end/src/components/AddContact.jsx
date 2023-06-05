import React, { useState } from 'react'

const json = {};
const AddContact = ({addForm, getContacts, updateContact, setUpdateContact}) => {
    if(updateContact.first_name){
        json["first_name"] = updateContact.first_name;
        json["last_name"] = updateContact.last_name;
        json["phone"] = updateContact.phone;
        json["email"] = updateContact.email;
    }
    const [details, setDetails] = useState(json);

    const handleDetails = (e)=>{
        let key = e.target.name;
        let value = e.target.value;
        json[key] = value;
        setDetails(json);
        console.log(details);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('/contacts', {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "Application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            setUpdateContact({})
            getContacts();
        })
    }

    const handleUpdate = (e)=>{
        e.preventDefault();
        fetch(`/contacts/${updateContact.id}`, {
            method: "PATCH",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "Application/json"
            }
        })
        .then(res => res.json)
        .then(res => {
            getContacts();
        })
    }

  return (
    <div className={addForm? "active": "add-contact"}>
        <form onSubmit={updateContact.first_name? handleUpdate: handleSubmit}>
            <input type="text" name="first_name" defaultValue={updateContact.first_name? updateContact.first_name: ""} placeholder='First Name' onChange={handleDetails}/>
            <input type="text" name="last_name" defaultValue={updateContact.last_name? updateContact.last_name: ""}placeholder='Last Name' onChange={handleDetails}/>
            <input type="number" name="phone" defaultValue={updateContact.phone? updateContact.phone: ""} placeholder='Phone Number' onChange={handleDetails}/>
            <input type="email" name="email" defaultValue={updateContact.email? updateContact.email: ""} placeholder='Email Address' onChange={handleDetails}/>
            <button>{updateContact.first_name? "Update": "Add"}</button>
        </form>
    </div>
  )
}

export default AddContact

// {
//     "id": 7,
//     "first_name": null,
//     "last_name": null,
//     "email": null,
//     "category_id": null,
//     "created_at": "2023-03-06T19:57:00.020Z",
//     "updated_at": "2023-03-06T19:57:00.020Z",
//     "phone": null
// }