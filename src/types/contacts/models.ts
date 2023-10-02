export type Contact = {
  contact_id: number;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
};

export type CreateContact = Omit<Contact, 'contact_id'>;
