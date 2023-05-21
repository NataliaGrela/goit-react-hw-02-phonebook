import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    name: '',
    number: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  handleChangeName(name) {
    this.setState({ name });
  }
  handleChangePhone(number) {
    this.setState({ number });
  }

  handleFilter(filter) {
    this.setState({ filter });
  }
  handleAddContact() {
    !this.contactExists()
      ? this.setState({
          contacts: [
            ...this.state.contacts,
            {
              id: nanoid(),
              name: this.state.name,
              number: this.state.number,
            },
          ],
        })
      : alert(`${this.state.name} is already in contacts`);
  }

  handleDeleteContact(id) {
    const contactIndex = this.state.contacts.findIndex(item => item.id === id);
    this.state.contacts.splice(contactIndex, 1);
    //  console.log(this.state.contacts)
    this.setState({ contacts: [...this.state.contacts] });
  }

  contactExists() {
    return this.state.contacts.find(
      item => item.name.toUpperCase() === this.state.name.toUpperCase()
    );
  }
  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={e => this.handleAddContact(e)}
          onChangeName={e => this.handleChangeName(e)}
          onChangePhone={e => this.handleChangePhone(e)}
        ></ContactForm>

        <h2>Contacts</h2>
        <Filter
          contacts={this.state.contacts}
          onChange={e => this.handleFilter(e)}
        ></Filter>
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDelete={id => this.handleDeleteContact(id)}
        ></ContactList>
      </div>
    );
  }
}

export default App;
