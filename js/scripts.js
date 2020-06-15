// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, location, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.location = location;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
// User Interface Logic ---------
