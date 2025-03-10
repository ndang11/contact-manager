import { useContext } from "react";
import { ContactContext } from "../context/Contect";
import { useNavigate } from "react-router";

export default function ContactDetail({ contact, index }) {
  const deleteContact = useContext(ContactContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/", { state: { contact, index } });
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-info">
          <p>
            <strong>{contact.name}</strong>
          </p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
        <div className="button">
          <button onClick={handleEdit} className="edit">
            Edit
          </button>
          <button onClick={() => deleteContact(index)} className="delete">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
