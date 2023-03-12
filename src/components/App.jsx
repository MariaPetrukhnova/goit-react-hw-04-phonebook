import React, { Component } from "react";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmitHandler = (data) => {
    this.addContact(data);
  }

  addContact = (data) => {
    const contact = {
      id: data.id,
      name: data.name,
      number: data.number,
    }

    if (this.state.contacts.map(contact => contact.name).includes(contact.name)) {
      alert(contact.name + ' is already in contacts');
      return
    } else {
      this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

 deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList data={visibleContacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  };

}

export default App;
