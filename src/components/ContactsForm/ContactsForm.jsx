import React from 'react';
import { Title, AddBtn } from './ContactsForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactsForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts);

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  
  const NameInputId = nanoid();
  const NumberInputId = nanoid();

  const onTextChange = event => {
    setName(event.currentTarget.value);
  };

  const onNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };

    const normalizedName = name.toLowerCase();
    const savedContacts = contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
    );
  
    if (savedContacts) {
        alert(`${name} is already in contacts list`);
        return;
    }
    dispatch(addContact(contact));

    reset();
}

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>
        Name
        <input
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onTextChange}
          id={NameInputId}
        />
      </Title>
      <Title>
        Number
        <input
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onNumberChange}
          id={NumberInputId}
        />
      </Title>
      <AddBtn type="submit">Add contact</AddBtn>
    </form>
  );
};

export default ContactsForm;
