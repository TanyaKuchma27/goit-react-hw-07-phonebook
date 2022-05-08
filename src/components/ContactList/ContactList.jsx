import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactItem } from 'components/ContactItem';
import { Spinner } from 'components/Spinner';
import { List, Item } from './ContactList.styled';

export const ContactList = ({ contacts }) => {  
    const { isFetching } = useFetchContactsQuery();  
    
    return (
        <List>
            {isFetching && <Spinner />}
            {contacts && contacts.map(contact => (
                <Item key={contact.id}>
                    <ContactItem {...contact}/>                    
                </Item>
            ))}
        </List>
    )       
}