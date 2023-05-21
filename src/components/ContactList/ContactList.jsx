import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { Component } from 'react';

class ContactList extends Component {
  render() {
    let { contacts, filter } = this.props;
    contacts = filter
      ? contacts.filter(item =>
          item.name.toUpperCase().startsWith(filter.toUpperCase())
        )
      : contacts;
    return (
      <div>
        <ul>
          {contacts &&
            contacts.map(item => {
              const { name, number, id } = item;
              return (
                <ContactItem
                  name={name}
                  number={number}
                  id={id}
                  key={id}
                  onDelete={id => this.props.onDelete(id)}
                ></ContactItem>
              );
            })}
        </ul>
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
