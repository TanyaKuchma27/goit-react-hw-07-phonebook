import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactItem } from 'components/ContactItem';
import { Spinner } from 'components/Spinner';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {  
    const { data: contacts, isFetching } = useFetchContactsQuery(); 
        
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


    // const contacts = useSelector(getContacts);
    // const filter = useSelector(getFilter);

    // const getVisibleContacts = () => {
    //     const normalizedFilter = filter.toLowerCase();

    //     return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(normalizedFilter),
    //     );
    // };

    // const visibleContacts = getVisibleContacts();
    // const visibleContacts = contacts;