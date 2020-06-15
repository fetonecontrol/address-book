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



function list(array){

  for (let i=0; i <=array.length-1; i++) {
    addressBook.contacts[i].fullName;
    return array1;
  }
}

// User Interface Logic ---------

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
//Begin User Input ---------
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let location = $("#location").val();
    let number = $("#number").val();
//End User Input ----------
    let addressBook = new AddressBook();
    let contact1 = new Contact(firstName, lastName, location, number);
    addressBook.addContact(contact1);
    console.log(contact1);
//    let output = list(addressBook.contacts[0].firstName);
    $("ol#result").append("<li>" + addressBook.contacts[0].firstName + "</li>");
  });
});