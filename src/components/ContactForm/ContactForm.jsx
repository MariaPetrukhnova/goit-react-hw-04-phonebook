import React, { Component } from 'react';
import shortid from 'shortid';
import css from './ContactForm.module.css';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({ ...this.state, id:shortid.generate() });

        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: ''})
    }



    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div className={css.inputs_bar}>
                <label className={css.contacts_label}> Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    className={css.contacts_input}
                />  
                </label>
                <label className={css.contacts_label}> Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleInputChange}
                    className={css.contacts_input}
                    />
                </label>
            </div>
            <button type="submit" className={css.contacts_btn}>Add contact</button>
        </form>
        );
    }
}

export default ContactForm;