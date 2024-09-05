import { FormControl, FormGroup, Input, InputLabel, Typography,styled,Button } from "@mui/material"
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`;

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}
const AddUser = () => {

    const [user,setUser] = useState(defaultValue);
    
    const navigate = useNavigate(); // Redirect hook to use in the component

    const onValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }
    
    const addUserDetails = async() => {
        // add user details to the database
        await addUser(user);
        navigate('/all'); // Redirect to users page after adding user
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name"/>  
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="username"/>  
            </FormControl>
            <FormControl>
                <InputLabel>email</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="email"/>  
            </FormControl>
            <FormControl>
                <InputLabel>phone no</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="phone"/>  
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> addUserDetails()}>Submit</Button>
            </FormControl>
        </Container>
    )
};

export default AddUser;