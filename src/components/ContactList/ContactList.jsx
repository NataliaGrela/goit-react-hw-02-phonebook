import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = filter
      ? contacts.filter(item =>
          item.name.toUpperCase().startsWith(filter.toUpperCase())
        )
      : contacts;

    const contactItems = filteredContacts.map(({ name, number, id }) => (
      <div>
        <ContactItem
          name={name}
          number={number}
          id={id}
          key={id}
          onDelete={id => this.props.onDelete(id)}
        ></ContactItem>
      </div>
    ));
    return (
      <div>
        <ul>{contactItems}</ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
