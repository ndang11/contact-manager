export default function ContactList() {
  return (
    <>
      <div className="main-container">
        <h1>Contact Manager</h1>
        <h3>Create A New Contact</h3>
        <div className="contact-info">
          <div className="name">
            <label for="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="email">
            <label for="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="phone">
            <label for="phone">Phone Number:</label>
            <input type="number" id="number" />
          </div>
        </div>
        <div className="info-btn">
          <button type="submit">Add Contact</button>
        </div>
      </div>
    </>
  );
}
