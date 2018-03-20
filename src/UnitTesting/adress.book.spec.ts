import * as assert from "assert";
import { AdressBook } from './adress.book';

const addressBook = new AdressBook([]);
const person = {
  firstName: "Ivana",
  lastName: "Fustar",
  phoneNumber: "066248114"
};

const doublePerson = {
  firstName: "DrugaIvana",
  lastName: "Fustar",
  phoneNumber: "066248114"
};

addressBook.addContact(person);
addressBook.addContact(doublePerson);

const length = addressBook.contacts.length;
assert.deepEqual(addressBook.getContacts(), [person, doublePerson]);

assert.equal(addressBook.contacts.length, length);
addressBook.removeContact(person);

assert.equal(addressBook.contacts.length, length - 1);
