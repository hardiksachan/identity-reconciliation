import { AddContact, Contact, UpdateContact } from "./contact";

export interface ContactStore {
  addContact(contact: AddContact): Promise<void>;
  getContact(id: number): Promise<Contact | null>;
  updateContact(contact: UpdateContact): Promise<void>;
  getContactsWithEmail(email: string): Promise<Contact[]>;
  getContactsWithPhoneNumber(phoneNumber: string): Promise<Contact[]>;
}
