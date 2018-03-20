export interface IContact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export class AdressBook {
  constructor(public contacts: IContact[]) {

  }
  addContact(contact: IContact) {
    this.contacts.push(contact);
  }
  removeContact(contact: IContact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }
  getContacts() {
    return this.contacts;
  }
}
