import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useCreateContactMutation, useFetchContactsQuery } from 'redux/contactsSlice';
import { Spinner } from 'components/Spinner';
import { Form, Field, Text, Input, Button } from './ContactForm.styled';

export const ContactForm = () => { 
    const [addNewContact, { isLoading }] = useCreateContactMutation();
    const { data: contacts } = useFetchContactsQuery();  

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleNumberChange = e => {
        setNumber(e.target.value);
    };

    const formReset = () => {
        setName('');
        setNumber(''); 
    }
    
    const addContact = (name, number) => {
        const normalizedName = name.toLowerCase();

        if (contacts.find(contact =>
            contact.name.toLowerCase() === normalizedName)) {
            toast.error(`${name} is already in contacts`);
            return;
        };     
        
        toast.success('Contact added!');
            
        return addNewContact({ name, number });
    };

    const handleSubmit = e => {
        e.preventDefault();       
        addContact(name, number);       
        formReset();              
    }
    
    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Field>
                <Text>Name</Text>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}                    
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Field>
            <Field>
                <Text>Number</Text>
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}                    
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Field>
            <Button type="submit">
                {isLoading ? <Spinner size="36"/> : 'Add contact'}
            </Button>
        </Form>
    )    
}