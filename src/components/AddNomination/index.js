import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { reset } from 'redux-form';

/* component styles */
import { styles } from './styles.scss';

export class AddNomination extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    fields: React.PropTypes.object.isRequired,
    items: React.PropTypes.array,
    addNomination: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onAdd = (event) => {
    if (this.props.fields.name.value) {
      /* add item*/
      this.props.addNomination(this.props.fields);

      /* reset form */
      this.props.dispatch(reset('addItem'));
    }
    event.preventDefault();
  };

  render() {
    console.log(this.props);
    const {
      fields: { name },
    } = this.props;

    return (
      <form className={styles} onSubmit={this.onAdd}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter something"
            {...name}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={this.onAdd}>
            Add Nomination
          </button>
        </div>
      </form>
    );
  }
}

AddNomination = reduxForm({
  form: 'addNomination',
  fields: ['name'],
  destroyOnUnmount: false,
})(AddNomination);

export default AddNomination;
