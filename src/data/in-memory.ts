import { AddContact, Contact, UpdateContact } from "../domain/contact";

let nextId: number = 1;
let contacts: Contact[] = [];

const addContact = async (contact: AddContact) => {
  contacts = [
    ...contacts,
    {
      ...contact,
      id: nextId++,
      createdAt: new Date(),
    },
  ];
};

const getContact = async (id: number) => {
  return contacts.find((contact) => contact.id === id);
};

const updateContact = async (contact: UpdateContact) => {
  const idx = contacts.findIndex(({ id }) => id === contact.id);
  if (idx === -1) return;
  contacts[idx] = { ...contacts[idx], ...contact };
};

const getContactsWithEmail = async (email: string) => {
  return [...contacts.filter((contact) => contact.email === email)];
};

const getContactsWithPhoneNumber = async (phoneNumber: string) => {
  return [...contacts.filter((contact) => contact.phoneNumber === phoneNumber)];
};

export default {
  addContact,
  getContact,
  updateContact,
  getContactsWithEmail,
  getContactsWithPhoneNumber,
};
