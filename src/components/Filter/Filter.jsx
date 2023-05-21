import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  handleChange(e) {
    const { value } = e.currentTarget;
    const { onChange } = this.props;
    onChange && onChange(value);
  }
  render() {
    return (
      <div className={css.filter}>
        <label>Find contacts by name</label>
        <input onChange={e => this.handleChange(e)}></input>
      </div>
    );
  }
}

Filter.propTypes = {
  contacts: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
