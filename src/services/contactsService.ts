import API from '@/config';
import { Contact } from '@/types/contacts/models';
import axiosInstance from '@/utils/axiosInterceptors';

const getContacts = async (): Promise<Contact> => {
  const res = await fetch(API.baseUrl + 'contacts', {
    next: { revalidate: 3600 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  return res.json().then(data => data);
};

const updateContacts = async (model: Contact): Promise<void> => {
  const res = await axiosInstance.put<void>('contacts', { ...model });
};

const contactsService = {
  getContacts,
  updateContacts
};

export default contactsService;
