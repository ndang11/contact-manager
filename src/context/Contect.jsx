import { Children, createContext, useState } from "react"

export const ContactContext = createContext()
export const ContactProvider = ({ Children}) =>{
    const [contacts, setContacts] = useState([])

    const addContact =(contact) =>{
        setContacts([...contacts, contact])
    }
    const deleteContact =(index) =>{
        setContacts(contacts.filter((_, i)=> i !== index))
    }
    const editContact = (index, contact) =>{
        const updateContacts=[...contacts]
        updateContacts[index]=contact;
        setContacts(updateContacts)
    }

    return<>
      <ContactContext.Provider value={{contacts, addContact, deleteContact, editContact}}>
        {Children}
      </ContactContext.Provider>
    
    </>
}

