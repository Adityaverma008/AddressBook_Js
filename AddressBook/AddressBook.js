import Contact from "./Contact.js"; // Import Contact class

class AddressBook {
  // create array
  constructor() {
    this.contacts = [];
  }

  // method to add contact object in array
  addContact(contact) {
    this.contacts.push(contact);
  }

  // method to display contacts
  displayContacts() {
    return this.contacts.map((contact) => contact.toString()).join("\n");
  }

  // Function to find and edit a contact
  editDetails(firstName, lastName, newDetails) {
    let contact = this.contacts.find(
      (contact) =>
        contact.firstName.toLowerCase() === firstName.toLowerCase() &&
        contact.lastName.toLowerCase() === lastName.toLowerCase()
    );

    if (contact) {
      Object.assign(contact, newDetails);
      console.log(`Contact updated successfully:\n`, contact);
    } else {
      console.log("Contact not found.");
    }
  }
}
// Exporting the AddressBook class
export default AddressBook;
