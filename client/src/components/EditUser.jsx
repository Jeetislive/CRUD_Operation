import { FormControl, FormGroup, Input, InputLabel, Typography,styled,Button } from "@mui/material"
import { useEffect, useState } from "react";
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

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
const EditUser = () => {

    const [user,setUser] = useState(defaultValue);
    const [users, setUsers] = useState([]);
    console.log(user);
    
    //const { name, username, email, phone } = user;
    const navigate = useNavigate(); // Redirect hook to use in the component
    const { uid } = useParams();
    //let temp = uid;

    const loadUserDetails = async(uid) => {
        const response = await getUser(uid);
        setUsers(response.data);
    }

    
    // useEffect
    useEffect(()=> {
        loadUserDetails(uid) // Fetch user details when the component mounts
    },[uid])

    

    

    const onValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }
    
    const editUserDetails = async() => {
        // add user details to the database
        await editUser(user,uid);
        navigate('/all'); // Redirect to users page after adding user
    }

    return (
        <Container>
            {
                users.map((item) => (
                    <>
                    <Typography variant="h4">Edit User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name="name" value={item.name}/>  
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name="username" value={item.username}/>  
                </FormControl>
                <FormControl>
                    <InputLabel>email</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name="email" value={item.email}/>  
                </FormControl>
                <FormControl>
                    <InputLabel>phone no</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name="phone" value={item.phone}/>  
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => editUserDetails()}>Update</Button>
                </FormControl>
                    </>
                ))
            }
            
            
            </Container>
    )
};

export default EditUser;