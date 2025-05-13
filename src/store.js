// store.js
import { makeAutoObservable } from 'mobx';

class ContactStore {
  contacts = [];

  constructor() {
    makeAutoObservable(this);
    this.addRandomContact();
    this.addRandomContact();
  }

  addRandomContact() {
    const types = ['Телефон', 'Email'];
    const randomType = types[Math.floor(Math.random() * types.length)];

    const newContact = {
      id: Date.now() + Math.random(), // уникальный id
      type: randomType,
      mask: randomType === 'Телефон' ? '+7 (___) ___-__-__' : 'email@example.com',
      value: randomType === 'Телефон'
        ? `+7 (${Math.floor(100 + Math.random() * 900)}) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(10 + Math.random() * 90)}`
        : `user${Math.floor(Math.random() * 1000)}@mail.com`,
      isConfirmed: false,
      isDeleted: false,
    };

    this.contacts.push(newContact);
  }

  toggleConfirmed(id) {
    const contact = this.contacts.find(c => c.id === id);
    if (contact) contact.isConfirmed = !contact.isConfirmed;
  }

  toggleDeleted(id) {
    const contact = this.contacts.find(c => c.id === id);
    if (contact) contact.isDeleted = !contact.isDeleted;
  }

  restore(id) {
    const contact = this.contacts.find(c => c.id === id);
    if (contact) contact.isDeleted = false;
  }
}

export const contactStore = new ContactStore();
