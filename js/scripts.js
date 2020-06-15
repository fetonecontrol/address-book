// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
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


// AddressBook.prototype.print = function(array) {
//   printArray = [];
//     for (let i=0; i <=this.contacts.length-1; i++) {
//       printArray.push(i);
//       }
//   return printArray;
// }

// User Interface Logic ---------
let addressBook = new AddressBook();

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
//Begin User Input ---------
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let location = $("#location").val();
    let number = $("#number").val();
//End User Input ----------
    // let addressBook = new AddressBook();
    let newContact = new Contact(firstName, lastName, location, number);
    addressBook.addContact(newContact);
    console.log(newContact);
//    let output = list(addressBook.contacts[0].firstName);
    $("ol#result").append("<li>" + addressBook.contacts[0].firstName + "</li>");
  });
});
//Begin Form Two: Search

// $(document).ready(function() {v
//   $("form#search").submit(function(event) {
//     event.preventDefault();
// //Begin User Input ---------
//     let index = parseInt($("#index").val());
//     for (let i = 0; i <= contacts.length-1; i++){
//       let contact = addressBook.contacts[i];
//     }
// //End User Input ----------
// //    let output = list(addressBook.contacts[0].firstName);
//     $("ol#result2").append("<li>" + contact + "</li>");
//   });
// });

// 
