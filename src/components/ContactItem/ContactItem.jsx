import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Button } from './ContactItem.styled';
import { Spinner } from 'components/Spinner';


export const ContactItem = ({ id, name, phone }) => {   
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

    return (
        <div>
            {name}:  {phone}     
            <Button
                type="button"
                onClick={() => deleteContact(id) }
                disabled={isDeleting}               
            >
                {isDeleting && <Spinner size={12} />}                
            Delete
            </Button>
        </div>);
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired   
}