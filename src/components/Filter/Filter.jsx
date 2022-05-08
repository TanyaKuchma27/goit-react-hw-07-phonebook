import { Field, Text, Input } from './Filter.styled';
// import { filterContact} from 'redux/contactsSlice';

export const Filter = () => {  
    

    return (
        <Field>
            <Text>Find contacts by name</Text>
            <Input
                type="text"                
                // value={}                
                // onChange={e => dispatch(filterContact(e.target.value))}
            />
        </Field>
    );
};