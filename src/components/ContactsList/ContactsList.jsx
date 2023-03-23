import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import {
  ContactList,
  ContactItem,
  ContactText,
  ContactLink,
  ContactButton,
} from './ContactsList.styled';

export const ContactsList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const getContacts = () => {
    const normilizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const filterName = getContacts();
  return (
    <ContactList>
      {filterName.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactText>{name}:</ContactText>
          <ContactLink href="/">{number}</ContactLink>
          <ContactButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};

export default ContactsList;
