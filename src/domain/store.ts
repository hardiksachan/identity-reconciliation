import { Contact, ContactData } from "./contact";

export interface ContactStore {
  addContact(contact: ContactData): Promise<void>;
  getContact(id: number): Promise<Contact>;
  updateContact(contact: Contact): Promise<void>;
  getContactsWithEmail(email: string): Promise<Contact[]>;
  getContactsWithPhoneNumber(phoneNumber: string): Promise<Contact[]>;
}
